import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicLinksPageRoutingModule } from './public-links-routing.module';

import { PublicLinksPage } from './public-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicLinksPageRoutingModule
  ],
  declarations: [PublicLinksPage]
})
export class PublicLinksPageModule {}
