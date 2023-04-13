import { Module } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductTypeController } from './product_type.controller';
import { ProductType } from './product_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  providers: [ProductTypeService],
  controllers: [ProductTypeController]
})
export class ProductTypeModule {}
