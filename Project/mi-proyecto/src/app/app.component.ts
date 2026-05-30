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

// Este es el componente principal de la aplicación, el que
// se carga primero. Aquí configuramos el menú lateral con las
// tres secciones: Inicio, Información Personal y Contacto.
// El menú usa type="overlay" tal como lo pide el diseño Obsidian.
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
  // Lista de páginas que aparecen en el menú lateral.
  // Cada una tiene su título, la ruta y el icono que
  // cambia entre outline (iOS) y sharp (Material Design).
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
