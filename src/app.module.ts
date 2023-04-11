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
import { Driver } from './modules/drivers/driver.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      database: 'demo',
      port: 5432,
      host: 'localhost',
      password: 'Apple@8800',
      entities: [User, Category, Driver],
      synchronize: true,
    }),
    UserModule,
    DriversModule,
    CategoryModule,
  ],
})
export class AppModule {}
