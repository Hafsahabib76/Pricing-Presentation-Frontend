import { Component } from '@angular/core';

@Component({
  selector: 'app-incentive-simulation',
  templateUrl: './incentive-simulation.component.html',
  styleUrls: ['./incentive-simulation.component.css']
})
export class IncentiveSimulationComponent {
  offerVolumeListPrice = 10000;
  topDiscount = 15;
  targetDiscount = 10;
  floorDiscount = 5;
  incentiveForDeal = 'Achieve a 12% discount incentive';
  realisticDiscountScenario = 'Expected discount scenario analysis';

  sliderValue: number = 0; // Default slider value
  incentiveChartData = [
    { name: 'Value 1', value: 0 },
    { name: 'Value 2', value: 0 },
    { name: 'Value 3', value: this.sliderValue }, // This will be updated to slider value
    { name: 'Value 4', value: 0 },
    { name: 'Value 5', value: 0 }
  ];

  // Method to handle slider value change
  onSliderChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const newValue = Number(value); // Convert the slider value to a number
    console.log(newValue);

    // Check if the newValue is valid and within 0-100 range
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      this.sliderValue = newValue; // Update the slider value
      this.updateChartData(newValue); // Update chart data
    }
  }

  // Function to update chart data
  updateChartData(dataValue: number) {
    // Ensure values are valid numbers
    this.incentiveChartData = [
      { name: 'Value 1', value: 0 },
      { name: 'Value 2', value: 0 },
      { name: 'Value 3', value: Math.round(dataValue) }, // Round the slider value to avoid decimals
      { name: 'Value 4', value: 0 },
      { name: 'Value 5', value: 0 }
    ];
  }
}
