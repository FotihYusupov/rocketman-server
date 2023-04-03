/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import {join} from 'path'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';
import { DriversModule } from './modules/drivers/drivers.module';

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
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    DriversModule,
  ],
})
export class AppModule {}
