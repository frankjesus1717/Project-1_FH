import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircle,
  personOutline,
  mailOutline,
  callOutline,
  globeOutline,
  locationOutline,
  briefcaseOutline,
} from 'ionicons/icons';

// Página con datos personales de ejemplo en modo lectura.
// Cada campo tiene su icono para que se vea más organizado.
// En un futuro estos datos podrían venir de una base de datos
// o de un servicio, pero por ahora son estáticos.
@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
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
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  ],
})
export class PersonalPage {
  // Arreglo con datos personales. Cada objeto tiene:
  // - label: el título del campo
  // - value: el valor a mostrar
  // - icon: el icono de Ionicons que lo representa
  personalInfo = [
    { label: 'Nombre completo', value: 'Franklin Hernandez', icon: 'person-outline' },
    { label: 'Correo electronico', value: 'frankjesus1717@gmail.com', icon: 'mail-outline' },
    { label: 'Telefono', value: '+58 414 366 9257', icon: 'call-outline' },
    { label: 'Pais', value: 'Venezuela', icon: 'globe-outline' },
    { label: 'Ciudad', value: 'Caracas', icon: 'location-outline' },
    { label: 'Ocupacion', value: 'Analista Informático', icon: 'briefcase-outline' },
  ];

  constructor() {
    addIcons({
      personCircle,
      personOutline,
      mailOutline,
      callOutline,
      globeOutline,
      locationOutline,
      briefcaseOutline,
    });
  }
}
