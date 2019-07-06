import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SectionLayoutsData, GlobalData, DataData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  dataSectionLayout = SectionLayoutsData[4];
  globalData = GlobalData;
  dataData = DataData;
  lineChart = [];
  barGraph = [];
  pieChart = [];
  radarGraph = [];
  polarAreaGraph = [];
  logarithmicLineGraph = [];

  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [
          {
            label: "Dataset 1",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            borderColor: "rgba(75, 192, 192, 1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75, 192, 192, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 50],
          },
          {
            label: "Dataset 2",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(75, 75, 192, 0.4)",
            borderColor: "rgba(75, 72, 192, 1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75, 72, 192, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 72, 192, 1)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 20, 60, 20, 80, 55, 90],
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });

    this.barGraph = new Chart('bar-graph', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
          {
            label: 'Number Per Month',
            backgroundColor: '#ADFF2F',
            borderColor: '#ADFF2F',
            borderWidth: 2,
            data: [10, 20, 55, 30],
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.pieChart = new Chart('pie-chart', {
      type: 'doughnut',
      data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', '#8e44ad'],
            data: [10, 20, 55, 30, 10],
          },
        ]
      },
      options: {
        cutoutPercentage: 0,
        rotation: Math.PI * 0.5,
        animation: {
          animateScale: true
        }
      }
    });

    this.radarGraph = new Chart('radar-chart', {
      type: 'radar',
      data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: 'rgba(00, 255, 00, 0.1)',
            borderColor: '#00FF00',
            borderWidth: 2,
            data: [10, 20, 55, 30, 10],
          },
          {
            label: 'Points',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            borderColor: '#00FFFF',
            borderWidth: 2,
            data: [5, 100, 20, 70, 80],
          }
        ]
      }
    });

    this.polarAreaGraph = new Chart('polar-area-chart', {
      type: 'polarArea',
      data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', '#8e44ad'],
            borderWidth: 2,
            data: [10, 20, 55, 30, 10],
          },
        ]
      },
      options: {
        animation: {
          animateScale: false
        }
      }
    });

    this.logarithmicLineGraph = new Chart('logarithmic-line-graph', {
      type: 'line',
      data: {
        labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
        datasets: [
          {
            label: 'Points',
            borderColor: '#2980b9',
            data: [10, 20, 55, 30, 10],
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            type: 'logarithmic',
            ticks: {
              min: 1,
              max: 60
            }
          }]
        }
      }
    });
  }

}
