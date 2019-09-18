import { Component, OnInit, ViewChild, Input, ElementRef, DoCheck } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tracker-chart',
  templateUrl: './tracker-chart.component.html',
  styleUrls: ['./tracker-chart.component.scss'],
})
export class TrackerChartComponent implements OnInit {

  lineChart: any;
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  @Input() data: number[];

  constructor() { }


  ngOnInit() {
    if (this.data == null)
      return;
    this.drawChart();
  }


  public drawChart() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {  
        datasets: [
          {
            data: this.data
          },
        ]
      }
    });
  }

}
