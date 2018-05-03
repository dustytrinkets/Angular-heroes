import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styleUrls: ['./heroe-search.component.css']
})
export class HeroeSearchComponent implements OnInit {

  heroes:Heroe[];
  heroesErr:string;
  private heroesList:Heroe[];

  constructor(  private activatedRoute:ActivatedRoute,
                private heroeService:HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroesList = this.heroeService.searchHeroe(params.term)
      if(this.heroesList.length == 0){
        this.heroesErr = "No hay heroes disponibles";
        this.heroes = [];
      }else{
        this.heroes = this.heroesList;
        this.heroesErr = "";
      }
    })
   }

  ngOnInit() {
  }

}
