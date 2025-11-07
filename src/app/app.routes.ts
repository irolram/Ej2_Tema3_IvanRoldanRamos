import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  // Redirección por defecto
  { path: '', redirectTo: 'list/servicios', pathMatch: 'full' },

  {
    path: 'list',
    loadComponent: () => import('./home/home.page').then(m => HomePage),
    children: [
      // Rutas específicas
      { path: 'perfil', loadComponent: () => import('./pages/perfil.page').then(m => m.PerfilPage) },
      { path: 'datos',  loadComponent: () => import('./pages/datos.page').then(m => m.DatosPage) },

      // Rutas dinámicas por categoría
      { path: ':cat', loadComponent: () => import('./pages/cards-list.page').then(m => m.CardsListPage) },

      { path: '', redirectTo: 'servicios', pathMatch: 'full' }
    ]
  },

  {
    path: 'cliente',
    loadComponent: () => import('./pages/cliente/cliente.page').then(m => m.ClientePage)
  },
  {
    path: 'datos-cliente',
    loadComponent: () => import('./pages/datos-cliente/datos-cliente.page').then(m => m.DatosClientePage)
  },

  // Wildcard por defecto
  { path: '**', redirectTo: 'list/servicios' }
];
