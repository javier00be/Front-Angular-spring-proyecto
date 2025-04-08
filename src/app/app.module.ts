import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [CustomerListComponent]
})
export class AppModule { }
