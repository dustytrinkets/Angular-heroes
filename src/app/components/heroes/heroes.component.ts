import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroesToDisplay: Heroe[] = [];
  
  constructor(public heroeservice: HeroesService, 
              private router: Router) {
                this.heroesToDisplay = heroeservice.getHeroes()
  }
  
  ngOnInit() {
  }


}
