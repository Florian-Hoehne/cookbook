import { Component, OnInit } from '@angular/core';
import { Recipe, create } from '../../model/recipe';

@Component({
  selector: 'cook-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    create({
      name: 'Salmon Lasagna',
      description: 'lasagna with salmon and spinach',
      imagePath: 'https://flic.kr/p/4Wqidy'
    }),
    create({
      name: 'Pancakes',
      description: 'tasty pancakes',
      imagePath: 'https://images.app.goo.gl/t8R1ijp95jeQwria8'
    }),
    create({
      name: 'Potato pancakes',
      description: 'potato pancakes, still tasty',
      imagePath: 'https://images.app.goo.gl/Y9b9n3gPLkdjbQYz8'
    })
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
