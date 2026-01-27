import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ads1 } from './components/ads1/ads1';
import { Error } from './components/error/error';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Info } from './components/info/info';
import { Navbar } from './components/navbar/navbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    Ads1,
    Error,
    Footer,
    Home,
    Info,
    Navbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
