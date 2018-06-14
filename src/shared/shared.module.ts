import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedDataService } from './services/shared-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [ 
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  providers: [SharedDataService]
})
export class SharedModule { }
