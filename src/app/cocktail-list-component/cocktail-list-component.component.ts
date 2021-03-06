import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {
  cocktails = [];

  constructor(private cocktailsService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails =this.cocktailsService.getCocktails()
    console.log(this.cocktails)
  }

}
