import { Controller, Get, Render, Query, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Product } from './Product.js';
import { profile } from 'console';
import { title } from 'process';
import { CreateProductDto } from './CreateProductDto.js';
 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  products: Product[] =[
  {
    "name": "Vezeték nélküli egér",
    "category": "elektronika",
    "price": 8990,
    "stock": 12
  },
  {
    "name": "Programozás kezdőknek",
    "category": "könyv",
    "price": 6490,
    "stock": 4
  },
  {
    "name": "Mechanikus billentyűzet",
    "category": "elektronika",
    "price": 24990,
    "stock": 3
  },
  {
    "name": "Fekete kapucnis pulóver",
    "category": "ruházat",
    "price": 12990,
    "stock": 8
  },
  {
    "name": "Catan társasjáték",
    "category": "játék",
    "price": 11990,
    "stock": 0
  },
  {
    "name": "USB-C töltőkábel",
    "category": "elektronika",
    "price": 4990,
    "stock": 25
  },
  {
    "name": "Adidas sportcipő",
    "category": "ruházat",
    "price": 27990,
    "stock": 2
  },
  {
    "name": "A kis herceg",
    "category": "könyv",
    "price": 3990,
    "stock": 15
  },
  {
    "name": "LEGO City rendőrségi állomás",
    "category": "játék",
    "price": 34990,
    "stock": 5
  },
  {
    "name": "Bluetooth hangszóró",
    "category": "elektronika",
    "price": 15990,
    "stock": 7
  }
]


  @Get()
  @Render('index')
  kiiras(){
    return {
      title: 'Termékek',
      products: this.products.sort((a, b) => a.price - b.price),
    }
    
  }

  @Get('filter')
  @Render('filter')
  szures(@Query('category') category:string){
    const joCategory = category;
    if (joCategory == ""){
      return {
      title: 'filter',
      products: this.products.sort((a, b) => a.price - b.price),
    }
    }
    return {
      title: 'filter',
      products: this.products.filter(item => item.category == joCategory)
    }
  }

  @Get('new')
  @Render('new')
  ujElem(){
    return{
      title:"új termék",
      success: ""
    }
  }
  @Post('new')
  @Render('new')
  newProduct(@Body() body:CreateProductDto){
    const newProduct:Product ={
      name: body.name,
      category: body.category,
      price: parseInt(body.price),
      stock: parseInt(body.stock)
    }
    this.products.push(newProduct);
    return{
      title: "új termék",
      success: "Sikeres felvétel"
    }
  }
}
