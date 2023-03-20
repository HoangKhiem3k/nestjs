import { Module } from '@nestjs/common';
import { CustomersController } from './customers/controllers/customers/customers.controller';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers/customers.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CustomersModule, UsersModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
