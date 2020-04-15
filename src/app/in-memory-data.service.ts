import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        "id": 12,
        "sku": 12064273040195392,
        "title": "Cat Tee Black T-Shirt",
        "description": "4 MSL",
        "availableSizes": ["S", "XS"],
        "style": "Black with custom print",
        "price": 10.9,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-1.jpg", "img-2.jpg"]
      },

      {
        "id": 13,
        "sku": 51498472915966366,
        "title": "Dark Thug Blue-Navy T-Shirt",
        "description": "",
        "availableSizes": ["M"],
        "style": "Front print and paisley print",
        "price": 29.45,
        "installments": 5,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-3.jpg", "img-4.jpg"]
      },

      {
        "id": 14,
        "sku": 10686354557628303,
        "title": "Sphynx Tie Dye Wine T-Shirt",
        "description": "GPX Poly 1",
        "availableSizes": ["X", "L", "XL"],
        "style": "Front tie dye print",
        "price": 9.0,
        "installments": 3,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-5.jpg", "img-6.jpg"]
      },

      {
        "id": 15,
        "sku": 11033926921508487,
        "title": "Skuul",
        "description": "Treino 2014",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "style": "Black T-Shirt with front print",
        "price": 14.0,
        "installments": 5,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-7.jpg", "img-8.jpg"]
      },

      {
        "id": 11,
        "sku": 39876704341265606,
        "title": "Wine Skul T-Shirt",
        "description": "",
        "availableSizes": ["X", "L"],
        "style": "Wine",
        "price": 13.25,
        "installments": 3,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-9.jpg", "img-10.jpg"]
      },

      {
        "id": 16,
        "sku": 10412368723880253,
        "title": "Short Sleeve T-Shirt",
        "description": "",
        "availableSizes": ["XS", "X", "L", "ML", "XL"],
        "style": "Grey",
        "price": 75.0,
        "installments": 5,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-11.jpg", "img-12.jpg"]
      },

      {
        "id": 0,
        "sku": 8552515751438644,
        "title": "Cat Tee Black T-Shirt",
        "description": "14/15 s/nº",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "style": "Branco com listras pretas",
        "price": 10.9,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-13.jpg", "img-14.jpg"]
      },

      {
        "id": 1,
        "sku": 18644119330491312,
        "title": "Sphynx Tie Dye Grey T-Shirt",
        "description": "14/15 s/nº",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "style": "Preta com listras brancas",
        "price": 10.9,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-15.jpg", "img-16.jpg"]
      },

      {
        "id": 2,
        "sku": 11854078013954528,
        "title": "Danger Knife Grey",
        "description": "14/15 s/nº",
        "availableSizes": ["X", "L"],
        "style": "Branco com listras pretas",
        "price": 14.9,
        "installments": 7,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-17.jpg", "img-18.jpg"]
      },

      {
        "id": 3,
        "sku": 876661122392077,
        "title": "White DGK Script Tee",
        "description": "2014 s/nº",
        "availableSizes": ["X", "L"],
        "style": "Preto com listras brancas",
        "price": 14.9,
        "installments": 7,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-19.jpg", "img-20.jpg"]
      },

      {
        "id": 4,
        "sku": 9197907543445677,
        "title": "Born On The Streets",
        "description": "14/15 s/nº - Jogador",
        "availableSizes": ["XL"],
        "style": "Branco com listras pretas",
        "price": 25.9,
        "installments": 12,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": false,
        "img": ["img-21.jpg", "img-22.jpg"]
      },

      {
        "id": 5,
        "sku": 10547961582846888,
        "title": "Tso 3D Short Sleeve T-Shirt A",
        "description": "14/15 + Camiseta 1º Mundial",
        "availableSizes": ["X", "L", "XL"],
        "style": "Preto",
        "price": 10.9,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": false,
        "img": ["img-23.jpg", "img-24.jpg"]
      },

      {
        "id": 6,
        "sku": 6090484789343891,
        "title": "Man Tie Dye Cinza Grey T-Shirt",
        "description": "Goleiro 13/14",
        "availableSizes": ["XL", "XXL"],
        "style": "Branco",
        "price": 49.9,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-25.jpg", "img-26.jpg"]
      },

      {
        "id": 7,
        "sku": 18532669286405342,
        "title": "Crazy Monkey Black T-Shirt",
        "description": "1977 Infantil",
        "availableSizes": ["S"],
        "style": "Preto com listras brancas",
        "price": 22.5,
        "installments": 4,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-27.jpg", "img-28.jpg"]
      },

      {
        "id": 8,
        "sku": 5619496040738316,
        "title": "Tso 3D Black T-Shirt",
        "description": "",
        "availableSizes": ["XL"],
        "style": "Azul escuro",
        "price": 18.7,
        "installments": 4,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": false,
        "img": ["img-29.jpg", "img-30.jpg"]
      },

      {
        "id": 9,
        "sku": 11600983276356165,
        "title": "Crazy Monkey Grey",
        "description": "",
        "availableSizes": ["L", "XL"],
        "style": "",
        "price": 134.9,
        "installments": 5,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-31.jpg", "img-32.jpg"]
      },

      {
        "id": 10,
        "sku": 27250082398145995,
        "title": "On The Streets Black T-Shirt",
        "description": "",
        "availableSizes": ["L", "XL"],
        "style": "",
        "price": 49.0,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": ["img-33.jpg", "img-34.jpg"]
      }
    ];
    return { products };
  }
}
