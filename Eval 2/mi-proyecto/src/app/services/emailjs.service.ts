import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

/* Servicio que gestiona el envío de correos electrónicos a
   través de la plataforma EmailJS. Inicializa el SDK con la
   clave pública y utiliza el identificador de servicio y el
   identificador de plantilla configurados en environment.ts
   para enviar los mensajes del formulario de contacto. */
@Injectable({ providedIn: 'root' })
export class EmailjsService {
  private readonly publicKey = environment.emailjs.publicKey;
  private readonly serviceId = environment.emailjs.serviceId;
  private readonly templateId = environment.emailjs.templateId;
  private readonly toEmail = environment.contactEmail;

  constructor() {
    emailjs.init(this.publicKey);
  }

  /* Envía un correo con los datos del formulario de contacto.
     Construye los parámetros de la plantilla y ejecuta el envío
     a través de la API de EmailJS. Si la respuesta no es
     satisfactoria (status 200), lanza un error para que el
     componente lo capture y lo muestre al usuario. */
  async send(data: { nombre: string; email: string; mensaje: string }): Promise<void> {
    const templateParams = {
      from_name: data.nombre,
      from_email: data.email,
      message: data.mensaje,
      to_email: this.toEmail,
    };

    const result = await emailjs.send(this.serviceId, this.templateId, templateParams);

    if (result.status !== 200) {
      throw new Error('Error al enviar el correo');
    }
  }
}
