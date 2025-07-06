import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment/typeorm/entities/payment.entity';
import { User } from './payment/typeorm/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'admin',
      password: 'admin',
      database: 'test_db',
      entities: [Payment, User],
      synchronize: true,
    }),
    PaymentModule,
  ],
})
export class AppModule {}
