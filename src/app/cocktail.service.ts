import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class CocktailService {
    cocktailList: CocktailService[] = [
        new CocktailService("Afternoon",45,"https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg"),
        new CocktailService("Autodafé",25,"https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg"),
        new CocktailService("Afterglow",15,"https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg")
    ]
    
    constructor(
        public name: string,
        public price: number,
        public img: string
    )
    {}
    
    public getCocktails(): CocktailService[]{
        return this.cocktailList
    }
}