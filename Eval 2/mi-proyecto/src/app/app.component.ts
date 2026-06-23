import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  home,
  personCircleOutline,
  personCircle,
  chatbubbleEllipsesOutline,
  chatbubbleEllipses,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  /* Configuración de las páginas que aparecen en el menú
     lateral. Cada entrada contiene el título visible, la ruta
     de navegación y el nombre del icono correspondiente. */
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Informacion Personal', url: '/personal', icon: 'person-circle' },
    { title: 'Contacto', url: '/contact', icon: 'chatbubble-ellipses' },
  ];

  constructor() {
    addIcons({
      homeOutline,
      home,
      personCircleOutline,
      personCircle,
      chatbubbleEllipsesOutline,
      chatbubbleEllipses,
    });
  }
}
