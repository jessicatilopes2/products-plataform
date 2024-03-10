import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductsService {
  
  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateProductDto){
    return this.prisma.product.create({
      data,
    });
  }
  
  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      }
    })
  }


  async update(id: string, data : UpdateProductDto) {
    return this.prisma.product.update({
      data,
      where: {
        id,
      }
    })
  }


  async remove(id: number) {}
}
