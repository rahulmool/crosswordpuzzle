import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcrosswordPageRoutingModule } from './editcrossword-routing.module';

import { EditcrosswordPage } from './editcrossword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcrosswordPageRoutingModule
  ],
  declarations: [EditcrosswordPage]
})
export class EditcrosswordPageModule {}
