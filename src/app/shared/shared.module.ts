import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './component/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertComponent } from './component/convert/convert.component';



@NgModule({
  declarations: [
    InputComponent,
    ConvertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ConvertComponent
  ]
})
export class SharedModule { }
