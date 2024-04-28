import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateLinksPage } from './private-links.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateLinksPageRoutingModule {}
