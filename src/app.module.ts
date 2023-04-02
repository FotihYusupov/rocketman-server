/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {join} from 'path'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';


@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      database: 'demo',
      port: 5432,
      host: 'localhost',
      password: 'Apple@8800',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
