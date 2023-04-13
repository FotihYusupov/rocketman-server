/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import {join} from 'path'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';
import { DriversModule } from './modules/drivers/drivers.module';
import { CategoryModule } from './modules/category/category.module';
import { Category } from './modules/category/category.entity';
import { ShopsModule } from './modules/shops/shops.module';
import { Shops } from './modules/shops/shops.entity';
import { Driver } from './modules/drivers/driver.entity';
import { TaklifModule } from './modules/takliflar/takliflar.module';
import { Taklif } from './modules/takliflar/takliflar.entity';
import { Payment } from './modules/payment/payment.entity';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [  
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      port: 5432,
      host: process.env.PG_HOST,
      password: process.env.PG_PASSWORD,
      entities: [User, Category, Shops, Driver, Taklif, Payment],
      synchronize: true,
    }),
    UserModule,
    DriversModule,
    CategoryModule,
    ShopsModule,
    TaklifModule,
    PaymentModule
  ],
})
export class AppModule {}
