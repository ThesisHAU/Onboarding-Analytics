import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataTableComponent } from "../data-table/data-table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Chart('onboardingTrend', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          { label: 'Pre-Boarding', data: [5, 10, 15, 12], borderColor: '#f44336', fill: true },
          { label: 'Orientation', data: [2, 4, 8, 10], borderColor: '#03a9f4', fill: true },
          { label: 'New Hire', data: [1, 2, 5, 8], borderColor: '#4caf50', fill: true }
        ]
      }
    });
  }
}
