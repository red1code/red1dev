import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Redouane Bekkouche - Home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'portfolio',
    title: 'Redouane Bekkouche - Portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(mod => mod.PortfolioComponent)
  },
];
