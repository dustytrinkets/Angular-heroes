import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe', component: HeroeComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    // { path: 'seachheroe/:id', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' } //redireccion a home si no encuentra la ruta

];

export const app_routing = RouterModule.forRoot(APP_ROUTES);