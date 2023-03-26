import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      connectString: process.env.CONNECTION_STRING,
      entities: [__dirname + '../entities/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
