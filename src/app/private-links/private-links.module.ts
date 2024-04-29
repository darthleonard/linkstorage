import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateLinksPageRoutingModule } from './private-links-routing.module';

import { PrivateLinksPage } from './private-links.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateLinksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrivateLinksPage]
})
export class PrivateLinksPageModule {}
