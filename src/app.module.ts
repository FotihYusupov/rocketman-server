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
<<<<<<< HEAD
import { ProductModule } from './modules/product/product.module';
import { Product } from './modules/product/product.entity';
import { ProductTypeModule } from './modules/product_type/product_type.module';
import { ProductType } from './modules/product_type/product_type.entity';
=======
import { Driver } from './modules/drivers/driver.entity';
import { TaklifModule } from './modules/takliflar/takliflar.module';
import { Taklif } from './modules/takliflar/takliflar.entity';
>>>>>>> c5a2403b41307abb1b914ad9293a3aa93da20a83

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
<<<<<<< HEAD
      entities: [User, Category, Shops, Product, ProductType],
=======
      entities: [User, Category, Shops, Driver, Taklif],
>>>>>>> c5a2403b41307abb1b914ad9293a3aa93da20a83
      synchronize: true,
    }),
    UserModule,
    DriversModule,
    CategoryModule,
    ShopsModule,
<<<<<<< HEAD
    ProductModule,
    ProductTypeModule,
=======
    TaklifModule
>>>>>>> c5a2403b41307abb1b914ad9293a3aa93da20a83
  ],
})
export class AppModule {}
