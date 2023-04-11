import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shops } from './shops.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shops])],
  providers: [ShopsService],
  controllers: [ShopsController],
})
export class ShopsModule {}
