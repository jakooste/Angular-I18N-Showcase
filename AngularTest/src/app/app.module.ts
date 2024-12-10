import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WpisWydatekComponent } from './wpis-wydatek/wpis-wydatek.component';
import { TabWydatkiComponent } from './tab-wydatki/tab-wydatki.component';
import { RachunekMainComponent } from './rachunek-main/rachunek-main.component';
import { RachunekHeaderComponent } from './rachunek-header/rachunek-header.component';
import { RachunekScreenComponent } from './rachunek-screen/rachunek-screen.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WpisWydatekComponent,
    TabWydatkiComponent,
    RachunekMainComponent,
    RachunekHeaderComponent,
    RachunekScreenComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
