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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleEllipses,
  personOutline,
  mailOutline,
  chatboxOutline,
  checkmarkCircle,
  closeCircle,
  send,
} from 'ionicons/icons';
import { EmailjsService } from '../services/emailjs.service';

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
  ],
})
export class ContactPage {
  /* Formulario reactivo con validación. Cada campo tiene reglas
     específicas: nombre obligatorio con mínimo de 3 caracteres,
     email con formato válido y mensaje con al menos 10 caracteres. */
  contactForm: FormGroup;

  /* Indica si el formulario ya fue enviado exitosamente para
     mostrar la pantalla de confirmación. */
  submitted = false;

  /* Controla el estado de carga mientras se envía el mensaje
     a través del servicio EmailJS. */
  sending = false;

  /* Mensaje de error que se muestra si el envío falla. */
  sendError = '';

  /* Almacena el nombre del remitente para personalizar el
     mensaje de confirmación posterior al envío. */
  submittedName = '';

  /* Campo del formulario que tiene el foco actual, se utiliza
     para aplicar estilos visuales de realce. */
  focusedField: string | null = null;

  /* Contador de caracteres del campo mensaje para informar
     al usuario sobre la longitud mínima requerida. */
  charCount = 0;

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

    /* Actualiza el contador de caracteres cada vez que el
       usuario escribe en el campo de mensaje. */
    this.contactForm.get('mensaje')?.valueChanges.subscribe({
      next: (v: string) => {
        this.charCount = v?.length ?? 0;
      },
    });

    addIcons({
      chatbubbleEllipses,
      personOutline,
      mailOutline,
      chatboxOutline,
      checkmarkCircle,
      closeCircle,
      send,
    });
  }

  /* Al recibir el foco un campo, se actualiza la referencia
     para aplicar los estilos de realce visual. */
  onFocus(field: string): void {
    this.focusedField = field;
  }

  /* Al perder el foco cualquier campo, se limpia la referencia
     y los estilos de realce se desactivan. */
  onBlur(): void {
    this.focusedField = null;
  }

  /* Procesa el envío del formulario. Valida que el formulario
     sea válido, activa el estado de carga, envía los datos a
     través de EmailJS y maneja la respuesta exitosa o el error. */
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

  /* Reinicia el formulario a su estado inicial y regresa a la
     pantalla de ingreso de datos después de un envío exitoso. */
  resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
    this.sendError = '';
    this.charCount = 0;
  }
}
