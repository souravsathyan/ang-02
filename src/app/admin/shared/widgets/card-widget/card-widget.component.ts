import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrl: './card-widget.component.css',
})
export class CardWidgetComponent {
  
  @Input() label : string
  @Input() total : string
  @Input() percentage : string
  @Input() data=[]
  
  chartOptions: {};
  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor:null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      yAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:{
            text:null
          },
        },
        startOnTick:false,
        tickOptions:[]
      },
      tooltip: {
        split: true,
        outside: true,
      },
      legend: { enabled: false },
      credits: { enabled: false },
      exporting: { enabled: false },
      xAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:{
            text:null
          },
        },
        startOnTick:false,
        tickOptions:[]
      },
      // plotOptions: {
      //   series: {
      //     pointStart: 2012,
      //   },
      //   area: {
      //     stacking: 'normal',
      //     lineColor: '#666666',
      //     lineWidth: 1,
      //     marker: {
      //       lineWidth: 1,
      //       lineColor: '#666666',
      //     },
      //   },
      // },
      series:this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }
}
