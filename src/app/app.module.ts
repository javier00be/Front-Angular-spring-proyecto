import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [CustomerCreateComponent]
})
export class AppModule { }
