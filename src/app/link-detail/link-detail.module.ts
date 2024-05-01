import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkDetailPageRoutingModule } from './link-detail-routing.module';

import { LinkDetailPage } from './link-detail.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LinkDetailPage]
})
export class LinkDetailPageModule {}
