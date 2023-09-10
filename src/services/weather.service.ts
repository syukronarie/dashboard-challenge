import axios from 'axios';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { from, Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalDatabaseService } from './local-database.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';
  private dataSubject = new Subject<any>();

  private key = 1;
  private storeName = 'weatherData';

  constructor(private localDbService: LocalDatabaseService) {
    this.fetchDataIfNeeded();
  }

  private fetchDataIfNeeded(): void {
    this.localDbService
      .getData(this.storeName, this.key)
      .pipe(
        switchMap((data) => {
          if (data) {
            this.dataSubject.next(data);
            return of(data);
          } else {
            // Data is not available in the local database, fetch it from the API
            return this.fetchDataFromApi();
          }
        })
      )
      .subscribe((result) => {
        console.log(result); // Result can be data from local DB or API
      });
  }

  fetchDataFromApi(): Observable<any> {
    // Make the API call and store data in the local database
    const params = {
      latitude: '1.125',
      longitude: '104',
      hourly: 'relativehumidity_2m,direct_radiation',
      daily: 'temperature_2m_max,temperature_2m_min',
      timezone: 'Asia/Singapore',
      start_date: '2023-01-01',
      end_date: '2023-01-10',
    };

    return from(axios.get(this.apiUrl, { params })).pipe(
      switchMap((response: any) => {
        // Check if the response contains data
        if (response.data) {
          const values = { id: this.key, ...response.data };
          // Store data in the local database
          return this.localDbService
            .storeData(this.storeName, values, this.key)
            .pipe(
              map(() => response.data),
              catchError((error) => {
                console.error('Error storing data in local database:', error);
                return of(null); // Return a fallback value or handle the error as needed
              })
            );
        } else {
          console.error('API response does not contain data.');
          return of(null); // Return a fallback value or handle the error as needed
        }
      }),
      catchError((error) => {
        console.error('API request failed:', error);
        return of(null); // Return a fallback value or handle the error as needed
      }),
      tap((data) => {
        if (data) {
          // Update the data subject
          this.dataSubject.next(data);
        }
      })
    );
  }

  getRelativeHumidityData(): Observable<number[]> {
    return this.dataSubject.asObservable().pipe(
      map((data) => {
        return data?.hourly?.relativehumidity_2m || [];
      })
    );
  }

  getDirectRadiationData(): Observable<number[]> {
    return this.dataSubject
      .asObservable()
      .pipe(map((data) => data?.hourly?.direct_radiation || []));
  }

  getTemperatureData(): Observable<any> {
    return this.dataSubject.asObservable().pipe(
      map((data) => ({
        time: data?.daily?.time || [],
        temperature_2m_max: data?.daily?.temperature_2m_max || [],
        temperature_2m_min: data?.daily?.temperature_2m_min || [],
      }))
    );
  }
}
