import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Redouane - Home',
    loadComponent: () => import('./pages/home/home.component')
      .then(mod => mod.HomeComponent)
  },
  {
    path: 'all-projects',
    title: 'Redouane - All projects',
    loadComponent: () => import('./pages/all-projects/all-projects.component')
      .then(mod => mod.AllProjectsComponent)
  },
  {
    path: 'project-detail/:id',
    title: 'Redouane - Project detail',
    loadComponent: () => import('./pages/project-detail/project-detail.component')
      .then(mod => mod.ProjectDetailComponent)
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: '**',
    title: 'Redouane - Not found page',
    component: NotFoundComponent
  }
];
