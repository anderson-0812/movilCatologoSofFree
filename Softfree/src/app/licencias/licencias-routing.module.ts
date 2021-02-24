import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciasPage } from './licencias.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciasPageRoutingModule {}
