import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

import { CustomersService } from '../../services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  //   @Get()
  //   getCustomer() {
  //     return this.customersService.getCustomer();
  //   }
  @Get(':id')
  findCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.getCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({
        message: 'Customer not found!',
      });
    }
  }
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.getCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }
  @Get('')
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
