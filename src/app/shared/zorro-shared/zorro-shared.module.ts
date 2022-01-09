import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzListModule} from "ng-zorro-antd/list";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzBadgeModule} from "ng-zorro-antd/badge";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzSpinModule,
    NzImageModule,
    NzFormModule,
    NzInputModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzToolTipModule,
    NzListModule,
    NzCommentModule,
    NzAvatarModule,
    NzBadgeModule,
  ]
})
export class ZorroSharedModule {
}
