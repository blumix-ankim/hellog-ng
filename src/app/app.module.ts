import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LeftComponent } from './content/left/left.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //외부 모듈 추가 - 서버 서비스 call 시 필요
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

