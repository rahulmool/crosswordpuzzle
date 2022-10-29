import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecrosswordPageRoutingModule } from './createcrossword-routing.module';

import { CreatecrosswordPage } from './createcrossword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecrosswordPageRoutingModule
  ],
  declarations: [CreatecrosswordPage]
})
export class CreatecrosswordPageModule {}
