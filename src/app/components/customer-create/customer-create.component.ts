import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  createCustomer() {
    let customer = new Customer(
      null,
      this.firstName,
      this.lastName,
      this.email
    );
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
