import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home,
  informationCircleOutline,
  chatbubbleEllipsesOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

// Página de inicio, la primera que ve el usuario.
// Tiene una tarjeta de bienvenida y tres tarjetas
// más chicas que muestran las secciones de la app.
// Usé OnPush para optimizar el rendimiento.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class HomePage {
  // Estas tarjetas destacan lo que se puede hacer en la app
  features = [
    {
      icon: 'information-circle-outline',
      label: 'Informacion Personal',
      desc: 'Datos de perfil y contacto',
    },
    {
      icon: 'chatbubble-ellipses-outline',
      label: 'Formulario de Contacto',
      desc: 'Envia mensajes directos',
    },
    {
      icon: 'shield-checkmark-outline',
      label: 'Diseno Obsidian',
      desc: 'Interfaz oscura y moderna',
    },
  ];

  constructor() {
    addIcons({
      home,
      informationCircleOutline,
      chatbubbleEllipsesOutline,
      shieldCheckmarkOutline,
    });
  }
}
