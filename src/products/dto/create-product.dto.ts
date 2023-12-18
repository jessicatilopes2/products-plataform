import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  id: number;

  @IsString()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discountPercentage: number;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  images: [];
}
