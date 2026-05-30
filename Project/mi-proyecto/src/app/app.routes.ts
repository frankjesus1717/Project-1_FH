import { Routes } from '@angular/router';

// Rutas de la aplicación. Son tres en total:
// home para el inicio, personal para los datos y contact
// para el formulario. Cada una carga su componente bajo
// demanda con lazy loading, así la app arranca más rápido.
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
