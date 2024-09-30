import { Component } from '@angular/core';

@Component({
  selector: 'app-incentive-simulation',
  templateUrl: './incentive-simulation.component.html',
  styleUrl: './incentive-simulation.component.css'
})
export class IncentiveSimulationComponent {

  //data for Incentive Simulation
  offerVolumeListPrice = 214933;
  topDiscount = 22.0;
  targetDiscount = 25.7;
  floorDiscount = 29.4;

  // Incentive for this deal (example data)
  incentiveForDeal = 'Incentive details would be displayed here.';

  // Realistic discount scenario (example data)
  realisticDiscountScenario = 'Scenario details would be displayed here.';

}
