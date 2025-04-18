import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private api: string = 'http://localhost:8080/api/customer';

  constructor( private http:HttpClient) {}

  getCustomersList(): Observable<Customer []> {
    return this.http.get<Customer[]>(`${this.api}/obtener`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.api}/crear`, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.api}/actualizar/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/eliminar/${id}`);
  }
}
