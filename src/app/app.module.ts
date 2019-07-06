import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MindsetComponent } from './components/mindset/mindset.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MindsetComponent,
    TestimonialComponent,
    ContactComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
