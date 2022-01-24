import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from '../../shared/models/Tag'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return[
      {name: 'All', count: 12},
      {name: 'Hamburger', count: 2},
      {name: 'FastFood', count: 4},
      {name: 'Lunch', count: 2},
      {name: 'SlowFood', count: 2},
      {name: 'snacks', count: 1},
      {name: 'Fry', count: 1},
    ];
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Burger',
        price: 3,
        tags: ['Hamburger', 'Burger', 'Lunch'],
        favourite: true,
        stars: 3.0,
        imageUrl: '/assets/images/foods/dish-1.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      },
      {
        id: 2,
        name: 'Turkey Pizza',
        price: 6,
        tags: ['Pizza', 'Pizza', 'Lunch'],
        favourite: true,
        stars: 3.0,
        imageUrl: '/assets/images/foods/dish-4.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      },
      {
        id: 3,
        name: 'Grilled Chicken',
        price: 9,
        tags: ['Fry', 'Grilled Chicken', 'FastFood'],
        favourite: true,
        stars: 4.0,
        imageUrl: '/assets/images/foods/dish-3.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      },
      {
        id: 4,
        name: 'Chicken Pizza',
        price: 12,
        tags: ['Pizza', 'Chicken Pizza', 'Lunch'],
        favourite: true,
        stars: 1.5,
        imageUrl: '/assets/images/foods/dish-4.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      },
      {
        id: 5,
        name: 'Chocolate Cake',
        price: 15,
        tags: ['Cake', 'Chocolate Cake', 'snacks'],
        favourite: true,
        stars: 2.5,
        imageUrl: '/assets/images/foods/dish-5.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      },
      {
        id: 6,
        name: 'Burger',
        price: 21,
        tags: ['Hamburger', 'Burger', 'SlowFood'],
        favourite: true,
        stars: 5.0,
        imageUrl: '/assets/images/foods/dish-1.png',
        cookTime: '40-50',
        origin: ['India', 'Asia']
      }
    ]
  }
}
function includes(tag: string): unknown {
  throw new Error('Function not implemented.');
}

