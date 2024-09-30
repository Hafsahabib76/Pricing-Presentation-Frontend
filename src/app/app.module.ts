import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule }  from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';
import { IncentiveSimulationComponent } from './incentive-simulation/incentive-simulation.component';


@NgModule({
  declarations: [
    AppComponent,
    IncentiveSimulationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
