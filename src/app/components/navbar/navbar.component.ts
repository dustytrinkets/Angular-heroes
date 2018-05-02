import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroesToDisplay: Heroe[] = [];

  constructor(public heroeservice: HeroesService) {
    this.heroesToDisplay = heroeservice.getHeroes()
  }
  ngOnInit() {
  }

}
