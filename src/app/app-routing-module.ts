import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Info } from './components/info/info';
import { Error } from './components/error/error';
import { Comdisney } from './components/comdisney/comdisney';
import { ComFinalSpace } from './components/com-final-space/com-final-space';
import { ComValorant } from './components/com-valorant/com-valorant';
import { ComDragonBall } from './components/com-dragon-ball/com-dragon-ball';

const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'info',
    component: Info
  },{
    path: 'comdisney',
    component: Comdisney
  },
  {
    path: 'comfinalspace',
    component: ComFinalSpace
  },
  {
    path: 'com-valorant',
    component: ComValorant
  },
  {
    path: 'com-dragon-ball',
    component: ComDragonBall
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
