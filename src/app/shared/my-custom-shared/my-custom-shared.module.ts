import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HammerDirective} from "../../directive/hammer.directive";

@NgModule({
  declarations: [
    HammerDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HammerDirective
  ]
})
export class MyCustomSharedModule {
}
