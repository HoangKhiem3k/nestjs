import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/interfaces/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    { id: 1, email: '1@gmail.com', name: 'khiem 1' },
    { id: 2, email: '2@gmail.com', name: 'khiem 2' },
    { id: 3, email: '3@gmail.com', name: 'khiem 3' },
  ];
  getCustomer() {
    return {
      id: 1,
      email: 'ledohoangkhiem3k@gmail.com',
      createdAt: new Date(),
    };
  }
  getAllCustomers() {
    return this.customers;
  }
  getCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
