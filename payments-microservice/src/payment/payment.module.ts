import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payment.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/payment.entity';
import { User } from './typeorm/entities/user.entity';

@Module({
  imports: [NatsClientModule, TypeOrmModule.forFeature([Payment, User])],
  controllers: [PaymentMicroserviceController],
  providers: [PaymentService],
})
export class PaymentModule {}
