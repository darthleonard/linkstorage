import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicLinksPageRoutingModule } from './public-links-routing.module';

import { PublicLinksPage } from './public-links.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicLinksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PublicLinksPage]
})
export class PublicLinksPageModule {}
