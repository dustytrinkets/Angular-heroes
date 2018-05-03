import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroesToDisplay: Heroe[] = [];

  constructor(public heroeservice: HeroesService,
              private router:Router) {
    this.heroesToDisplay = heroeservice.getHeroes()
  }
  ngOnInit() {
  }
  searchHeroe(text:string){
    console.log(text)
    this.router.navigate(['/heroe-search', text])
  }

}
