import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecrosswordPage } from './createcrossword.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecrosswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecrosswordPageRoutingModule {}
