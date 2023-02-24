import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

constructor(public cocktails: CocktailService ) {}

ngOnInit(): void {
  this.cocktails.getCocktails()
}
get cocktail() {return this.cocktails.cocktails}

}
console.log(CocktailService);
