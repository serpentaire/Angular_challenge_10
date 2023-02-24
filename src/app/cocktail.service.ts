import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails = [
    {
    name: "Magarita",
    prix: "25€",
    image: "image1"
    },
    {
      name: "Pinacolada",
      prix: "15€",
      image: "image2"
      },
  ];

  constructor() { }

public getCocktails() {
  return this.cocktails;
}
}

