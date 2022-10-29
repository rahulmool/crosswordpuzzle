import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcrosswordPage } from './editcrossword.page';

const routes: Routes = [
  {
    path: '',
    component: EditcrosswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcrosswordPageRoutingModule {}
