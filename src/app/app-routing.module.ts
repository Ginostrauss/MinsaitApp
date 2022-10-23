import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { RisorseComponent } from './modules/risorse/risorse.component';
import { ProgettiComponent } from './modules/progetti/progetti.component';
import { AllocazioniComponent } from './modules/allocazioni/allocazioni.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'progetti',
    component: ProgettiComponent
  }, 
  {
    path: 'risorse',
    component: RisorseComponent
  },
  {
    path: 'allocazioni',
    component: AllocazioniComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
