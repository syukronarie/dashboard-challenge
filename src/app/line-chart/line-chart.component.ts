import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service'; // Assuming you have a WeatherService to fetch data

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  chartOptions: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getTemperatureData().subscribe((data: any) => {
      this.chartOptions = {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Temperature Min and Max',
        },
        xAxis: {
          categories: data.time,
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)',
          },
        },
        series: [
          {
            name: 'Temperature Max',
            data: data.temperature_2m_max,
          },
          {
            name: 'Temperature Min',
            data: data.temperature_2m_min,
          },
        ],
      };

      Highcharts.chart('line-chart-container', this.chartOptions);
    });
  }
}
