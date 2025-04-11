import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';

// Importar para usar con Bootstrap modal
declare var bootstrap: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;
  editModal: any;
  deleteModal: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers() {
    this.customerService.getCustomersList().subscribe((data) => {
      this.customers = data;
      console.log(this.customers);
    });
  }

  // Inicializar el modal después de que la vista está cargada
  ngAfterViewInit() {
    this.editModal = new bootstrap.Modal(
      document.getElementById('editCustomerModal')
    );
  }

  // Abrir el modal con los datos del cliente seleccionado
  openEditModal(customer: Customer) {
    this.selectedCustomer = { ...customer }; // Crear una copia para no modificar el original
    this.editModal.show();
  }

  // Actualizar el cliente con los nuevos datos
  updateCustomer() {
    if (this.selectedCustomer && this.selectedCustomer.id !== null) {
      this.customerService
        .updateCustomer(this.selectedCustomer.id, this.selectedCustomer)
        .subscribe({
          next: () => {
            this.listCustomers(); // Refrescar la lista
            this.editModal.hide(); // Cerrar el modal
          },
          error: (err) => {
            console.error('Error al actualizar el cliente:', err);
          },
        });
    }
  }

 // Método para eliminar el cliente después de confirmar
 deleteCustomer() {
  if (this.selectedCustomer && this.selectedCustomer.id !== null) {
    this.customerService.deleteCustomer(this.selectedCustomer.id)
      .subscribe({
        next: () => {
          this.listCustomers(); // Refrescar la lista
          this.deleteModal.hide(); // Cerrar el modal
        },
        error: (err) => {
          console.error('Error al eliminar el cliente:', err);
        }
      });
  }
}
}
