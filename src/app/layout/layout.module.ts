import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule 
  ],
  exports: [ 
  	NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class LayoutModule { }
