
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './dashboard/components/card-details/card-details.component';
import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'card/:id', component: CardDetailsComponent },
    
    // { path: 'card', component: DashboardComponent},   

    { path: '**', component: NotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
