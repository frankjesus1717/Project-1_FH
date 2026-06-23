import { Routes } from '@angular/router';

/* Configuración de las rutas principales de la aplicación.
   Cada ruta carga su componente de forma diferida (lazy loading)
   para optimizar el tiempo de carga inicial. Las tres rutas
   disponibles son: inicio, información personal y contacto. */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'personal',
    loadComponent: () =>
      import('./personal/personal.page').then((m) => m.PersonalPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.page').then((m) => m.ContactPage),
  },
];
