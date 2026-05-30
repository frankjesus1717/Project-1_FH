import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

// Este servicio se encarga de enviar los correos usando EmailJS.
// Inicializa el SDK con la public key y envía mensajes
// a través de service ID y template ID configurados.
// El destinatario se lee de environment.ts línea 4.
@Injectable({ providedIn: 'root' })
export class EmailjsService {
  private readonly publicKey = environment.emailjs.publicKey;
  private readonly serviceId = environment.emailjs.serviceId;
  private readonly templateId = environment.emailjs.templateId;
  private readonly toEmail = environment.contactEmail;

  constructor() {
    emailjs.init(this.publicKey);
  }

  // Función principal: envía el correo con los datos del formulario.
  // Retorna una promesa, así que quien la llama debe usar await.
  // Si el status no es 200, lanzamos un error para manejarlo arriba.
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
