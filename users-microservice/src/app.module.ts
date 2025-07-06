import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/typeorm/entities/User';
import { Payment } from './users/typeorm/entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'admin',
      password: 'admin',
      database: 'test_db',
      entities: [User, Payment],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
