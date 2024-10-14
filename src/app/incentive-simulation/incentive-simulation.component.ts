import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the data label plugin

@Component({
  selector: 'app-incentive-simulation',
  templateUrl: './incentive-simulation.component.html',
  styleUrl: './incentive-simulation.component.css'
})
export class IncentiveSimulationComponent {

  offerVolumeListPrice = 10000;
  topDiscount = 15;
  targetDiscount = 10;
  floorDiscount = 5;
  incentiveForDeal = 'Achieve a 12% discount incentive';
  realisticDiscountScenario = 'Expected discount scenario analysis';
  
  // Chart view size
  view: [number, number] = [250, 250];

  // Chart data
  incentiveChartData = [
    { name: 'Value 1', value: 0 },
    { name: 'Value 2', value: 0 },
    { name: 'Value 3', value: 137 },
    { name: 'Value 4', value: 0 },
    { name: 'Value 5', value: 0 }
  ];


  // Color scheme
  colorScheme = "vivid"

}
