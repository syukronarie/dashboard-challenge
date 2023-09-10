import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  chartOptions: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getDirectRadiationData().subscribe((data: number[]) => {
      this.chartOptions = {
        chart: {
          type: 'area',
        },
        title: {
          text: 'Direct Radiation',
        },
        xAxis: {
          categories: data.map((_, index) => `Hour ${index}`),
        },
        yAxis: {
          title: {
            text: 'Direct Radiation (W/m²)',
          },
        },
        series: [
          {
            name: 'Direct Radiation',
            data: data,
          },
        ],
      };

      Highcharts.chart('area-chart-container', this.chartOptions);
    });
  }
}
