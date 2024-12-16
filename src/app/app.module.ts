import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import { WpisWydatekComponent } from './wpis-wydatek/wpis-wydatek.component';
import { TabWydatkiComponent } from './tab-wydatki/tab-wydatki.component';
import { RachunekMainComponent } from './rachunek-main/rachunek-main.component';
import { RachunekHeaderComponent } from './rachunek-header/rachunek-header.component';
import { RachunekScreenComponent } from './rachunek-screen/rachunek-screen.component';
import {NgOptimizedImage} from "@angular/common";
import { TabCzlonkowieComponent } from './tab-czlonkowie/tab-czlonkowie.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WpisWydatekComponent,
    TabWydatkiComponent,
    RachunekMainComponent,
    RachunekHeaderComponent,
    RachunekScreenComponent,
    TabCzlonkowieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
