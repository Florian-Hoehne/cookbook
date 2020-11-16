import { Component, OnInit } from '@angular/core';
import {create, Ingredient} from '../../../shared/ingredient'

@Component({
  selector: 'cook-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    create({
      name: 'Apples',
      amount: 1,
      unit: 'Piece'
    }),
    create({
      name: 'Potatoes',
      amount: 300,
      unit: 'kg'
    }),
    create({
      name: 'Onions',
      amount: 3,
      unit: 'Piece'
    })
    , create({
      name: 'Eggs',
      amount: 1,
      unit: 'Piece'
    })
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
