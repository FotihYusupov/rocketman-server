/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaklifController } from './takliflar.controller';
import { Taklif } from './takliflar.entity';
import { TaklifService } from './takliflar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Taklif])],
  controllers: [TaklifController],
  providers: [TaklifService],
})
export class TaklifModule {}
