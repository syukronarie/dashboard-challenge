import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDatabaseService {
  constructor(private dbService: NgxIndexedDBService) {}

  // Store data in the local database
  storeData(storeName: string, data: any, key: number): Observable<any> {
    this.dbService.clear(storeName);
    return from(this.dbService.add(storeName, data));
  }

  // Retrieve data from the local database by key
  getData(storeName: string, key: any): Observable<any> {
    return from(this.dbService.getByKey(storeName, key));
  }

  // Retrieve all data from a store
  getAllData(storeName: string): Observable<any[]> {
    return from(this.dbService.getAll(storeName));
  }

  // Clear all data in a store
  clearStore(storeName: string): Observable<any> {
    return from(this.dbService.clear(storeName));
  }
}
