import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Import NgxChartsModule
import { AppComponent } from './app.component';
import { IncentiveSimulationComponent } from './incentive-simulation/incentive-simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IncentiveSimulationComponent,  ],
  imports: [
    BrowserAnimationsModule,
    NgxChartsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
