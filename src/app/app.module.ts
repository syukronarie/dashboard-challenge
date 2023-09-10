import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'forecast',
  version: 1,
  objectStoresMeta: [
    {
      store: 'weatherData', // Change this to your preferred store name
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        { name: 'latitude', keypath: 'latitude', options: { unique: false } },
        { name: 'longitude', keypath: 'longitude', options: { unique: false } },
        {
          name: 'generationtime_ms',
          keypath: 'generationtime_ms',
          options: { unique: false },
        },
        {
          name: 'utc_offset_seconds',
          keypath: 'utc_offset_seconds',
          options: { unique: false },
        },
        { name: 'timezone', keypath: 'timezone', options: { unique: false } },
        {
          name: 'timezone_abbreviation',
          keypath: 'timezone_abbreviation',
          options: { unique: false },
        },
        { name: 'elevation', keypath: 'elevation', options: { unique: false } },
        {
          name: 'hourly_units',
          keypath: 'hourly_units',
          options: { unique: false },
        },
        { name: 'hourly', keypath: 'hourly', options: { unique: false } },
        {
          name: 'daily_units',
          keypath: 'daily_units',
          options: { unique: false },
        },
        { name: 'daily', keypath: 'daily', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [
    AppComponent,
    ColumnChartComponent,
    LineChartComponent,
    AreaChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
