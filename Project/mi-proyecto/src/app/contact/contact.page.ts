import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  IonInput,
  IonTextarea,
  IonButton,
  IonNote,
  IonIcon,
  IonSpinner,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleEllipses,
  personOutline,
  mailOutline,
  chatboxOutline,
  checkmarkCircle,
  closeCircle,
} from 'ionicons/icons';
import { EmailjsService } from '../services/emailjs.service';

// Página de Contacto con formulario validado.
// Aprendí a usar Reactive Forms con validaciones y a conectar
// el envío real mediante EmailJS. Los mensajes llegan al correo
// que está configurado en environment.ts (línea 4).
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
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
    IonInput,
    IonTextarea,
    IonButton,
    IonNote,
    IonIcon,
    IonSpinner,
  ],
})
export class ContactPage {
  // Formulario reactivo. Cada campo tiene sus reglas:
  // nombre obligatorio (mín 3 caracteres), email con
  // formato válido, y mensaje de al menos 10 caracteres.
  contactForm: FormGroup;

  // Bandera que cambia a true cuando el mensaje se envió
  submitted = false;

  // Controla el spinner del botón mientras se envía
  sending = false;

  // Si algo sale mal, aquí guardamos el mensaje de error
  sendError = '';

  // Guardamos el nombre para personalizar la pantalla de éxito
  submittedName = '';

  constructor(
    private fb: FormBuilder,
    private emailjsService: EmailjsService,
    private cdr: ChangeDetectorRef,
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });

    addIcons({
      chatbubbleEllipses,
      personOutline,
      mailOutline,
      chatboxOutline,
      checkmarkCircle,
      closeCircle,
    });
  }

  // Esta función se ejecuta al presionar "Enviar Mensaje".
  // Usamos async/await para esperar la respuesta de EmailJS.
  // Si funciona, mostramos la pantalla de éxito. Si no, un
  // mensaje de error. El markForCheck() es clave para que
  // Angular con OnPush detecte los cambios después del async.
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.sendError = '';
    const formData = this.contactForm.value;

    try {
      await this.emailjsService.send(formData);
      this.submittedName = formData.nombre;
      this.submitted = true;
    } catch {
      this.sendError = 'No se pudo enviar el mensaje. Verifica tu conexion y la configuracion de EmailJS en environment.ts.';
    } finally {
      this.sending = false;
      this.cdr.markForCheck();
    }
  }
}
