import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/* Servicio alternativo para el envío de mensajes de contacto.
   Utiliza el protocolo mailto para abrir el cliente de correo
   del usuario con los datos del formulario precargados en el
   asunto y el cuerpo del mensaje. La dirección de destino se
   obtiene desde la configuración de entorno. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly targetEmail = environment.contactEmail;

  /* Abre el cliente de correo predeterminado del sistema con
     los datos del formulario precargados: asunto con el nombre
     del remitente y cuerpo con todos los campos del formulario. */
  send(data: { nombre: string; email: string; mensaje: string }): void {
    const subject = encodeURIComponent(`Mensaje de ${data.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nCorreo: ${data.email}\n\nMensaje:\n${data.mensaje}`
    );
    window.location.href = `mailto:${this.targetEmail}?subject=${subject}&body=${body}`;
  }
}
