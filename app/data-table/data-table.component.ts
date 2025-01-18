import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  employees = [
    { name: 'JV Zulueta', status: 'Pre-Boarding', department: 'SOC', location: 'Hybrid' },
    { name: 'Kristine Mercado', status: 'Pre-Boarding', department: 'SNAMS', location: 'Remote' },
    { name: 'Cheena Maxine', status: 'Orientation', department: 'SAS', location: 'On-Site' },
    { name: 'Louise Salonga', status: 'New Hire', department: 'SBA', location: 'On-Site' },
    { name: 'Michael Johnson', status: 'New Hire', department: 'SED', location: 'Hybrid' }
  ];
}
