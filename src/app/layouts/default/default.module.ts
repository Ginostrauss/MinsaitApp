import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgettiComponent } from 'src/app/modules/progetti/progetti.component';
import { RisorseComponent } from 'src/app/modules/risorse/risorse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';



@NgModule({
  declarations: [
    DefaultComponent,
    RisorseComponent,
    ProgettiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
