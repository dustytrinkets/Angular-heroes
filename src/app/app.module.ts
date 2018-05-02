import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


//Routes
import { app_routing } from "./app.routes";

//Services
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
