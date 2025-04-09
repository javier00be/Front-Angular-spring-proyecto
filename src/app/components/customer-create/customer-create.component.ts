import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  ngOnInit(): void {

  }

}
