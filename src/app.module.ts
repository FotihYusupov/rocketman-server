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
import { ProductModule } from './modules/product/product.module';
import { Product } from './modules/product/product.entity';
import { ProductTypeModule } from './modules/product_type/product_type.module';
import { ProductType } from './modules/product_type/product_type.entity';

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
      entities: [User, Category, Shops, Product, ProductType],
      synchronize: true,
    }),
    UserModule,
    DriversModule,
    CategoryModule,
    ShopsModule,
    ProductModule,
    ProductTypeModule,
  ],
})
export class AppModule {}
