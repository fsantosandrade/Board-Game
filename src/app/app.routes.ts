import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WinnerComponent } from './pages/winner/winner.component';

export const routes: Routes = [
    { path: 'menu', component: MenuComponent, pathMatch: "full" },
    { path: 'board-game', component: GameComponent, pathMatch: "full" },
    { path: 'winner', component: WinnerComponent, pathMatch: "full" },
    { path: '**', redirectTo: "menu" }
];
