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
  /* Lista de datos personales que se muestran en la tarjeta.
     Cada elemento incluye una etiqueta descriptiva, el valor
     correspondiente y un icono representativo de Ionicons. */
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
