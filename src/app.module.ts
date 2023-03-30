import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
console.log(__dirname + '/entities/*.entity.{ts,js}');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tyke.db.elephantsql.com',
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/entities/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
