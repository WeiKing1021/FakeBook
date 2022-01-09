import {Injectable, NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ZorroSharedModule} from "./shared/zorro-shared/zorro-shared.module";
import {MyCustomSharedModule} from "./shared/my-custom-shared/my-custom-shared.module";
import {NzMessageService} from "ng-zorro-antd/message";
import { ShopComponent } from './pages/shop/shop.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { PostContentComponent } from './pages/post-content/post-content.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzBadgeModule} from "ng-zorro-antd/badge";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ChatRoomComponent,
    PostContentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        // ng-zorro module
        ZorroSharedModule,
        // self custom module
        MyCustomSharedModule,
    ],
  providers: [
    NzMessageService,
    {
      provide: NZ_I18N, useValue: zh_TW
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
