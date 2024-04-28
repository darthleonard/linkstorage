import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicLinksPage } from './public-links.page';

const routes: Routes = [
  {
    path: '',
    component: PublicLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicLinksPageRoutingModule {}
