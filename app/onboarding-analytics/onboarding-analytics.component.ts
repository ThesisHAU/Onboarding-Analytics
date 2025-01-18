import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-onboarding-analytics',
  templateUrl: './onboarding-analytics.component.html',
  styleUrls: ['./onboarding-analytics.component.css']
})
export class OnboardingAnalyticsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createOnboardingAnalysisChart();
  }

  createOnboardingAnalysisChart() {
    const ctx = document.getElementById('onboardingAnalysisChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar', // Change to 'line' or 'pie' for different chart types
      data: {
        labels: ['Pre-Boarding', 'Orientation', 'New Hire'],
        datasets: [
          {
            label: 'Number of Employees',
            data: [10, 7, 5], // Replace with dynamic data if needed
            backgroundColor: ['#f44336', '#03a9f4', '#4caf50'],
            borderColor: ['#d32f2f', '#0288d1', '#388e3c'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Onboarding Phase'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Employees'
            }
          }
        }
      }
    });
  }
}