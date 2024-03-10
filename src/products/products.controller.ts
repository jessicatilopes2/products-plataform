import { Controller, Get, Param, Delete, Post, Body, Patch, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body ()data: CreateProductDto){
    return this.productsService.create(data);
  }

  @Get() //le todos os registros do banco de dados
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id') // le apenas um registro do banco de dados
  findOne(@Param() id: string) {
    return this.productsService.findOne(id);
  }

  @Put()
  update(@Param() id: string, @Body()data: UpdateProductDto){ 
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
