import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Redouane - Home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'portfolio',
    title: 'Redouane - Portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(mod => mod.PortfolioComponent)
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
