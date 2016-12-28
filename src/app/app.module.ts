import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomersModule } from './customers/customers.module';

import { app_routing } from './app.routing';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    app_routing, 
    CustomersModule,
    CoreModule,   //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }