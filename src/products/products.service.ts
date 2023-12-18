import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import axios from 'axios';

@Injectable()
export class ProductsService {
  async findAll() {
    const options = {
      method: 'GET',
      url: 'https://dummyjson.com/products',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: String,
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [],
      }),
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  async findOne() {
    const options = {
      method: 'GET',
      url: 'https://dummyjson.com/products/2',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Number,
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [],
      }),
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async update(id: number, body: UpdateProductDto) {
    const response = await axios.put(`${process.env.DUMMY_CONFIG}/${id}`, {
      name: body,
    });
    return response.data;
  }

  async remove(id: number) {
    const response = await axios.delete(`${process.env.DUMMY_CONFIG}/${id}`);
    return response.data;
  }
}
