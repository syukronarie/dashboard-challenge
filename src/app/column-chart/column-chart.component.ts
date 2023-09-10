import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent implements OnInit {
  chartOptions: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getRelativeHumidityData().subscribe((data: any) => {
      console.log({ data });
      this.chartOptions = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Relative Humidity',
        },
        xAxis: {
          categories: data.time,
        },
        yAxis: {
          title: {
            text: 'Relative Humidity (%)',
          },
        },
        series: [
          {
            name: 'Relative Humidity',
            data,
          },
        ],
      };

      Highcharts.chart('column-chart-container', this.chartOptions);
    });
  }
}
