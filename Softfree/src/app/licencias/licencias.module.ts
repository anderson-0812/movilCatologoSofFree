import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciasPageRoutingModule } from './licencias-routing.module';

import { LicenciasPage } from './licencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciasPageRoutingModule
  ],
  declarations: [LicenciasPage]
})
export class LicenciasPageModule {}
