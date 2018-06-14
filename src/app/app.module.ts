// Angular-Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Shared-Module
import { SharedModule } from '../shared/shared.module';

// Routing-Config
import { AppRouting } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/components/card/card.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

// Services
import { DashboardService } from './services/dashboard.service';
import { CardDetailsComponent } from './dashboard/components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouting
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
