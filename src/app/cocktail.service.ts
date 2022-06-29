import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class CocktailService {

    cocktailList = [
        {name: 'Afternoon',
        price: 45,
        image:'https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg'
        },
        {
            name:'Autodafé',
            price:3,
            image:'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg'
        },
        {
            name:'Afterglow',
            price:5,
            image:'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
        }
        
    ]
    getCocktails(){
        return this.cocktailList
    }
}

