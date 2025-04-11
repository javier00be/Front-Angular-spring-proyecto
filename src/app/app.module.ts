import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path: '', component: CustomerListComponent}, //http:localhost:4200
  {path: 'customer/create', component: CustomerCreateComponent},//http:localhost:4200/customer/create
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Import the RouterModule and configure routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
