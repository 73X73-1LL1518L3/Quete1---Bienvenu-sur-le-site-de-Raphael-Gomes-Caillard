import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RaclettePartyComponent } from './raclette-party/raclette-party.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    UserProfileComponent,
    RaclettePartyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
