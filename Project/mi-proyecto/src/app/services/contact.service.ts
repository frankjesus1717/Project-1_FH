import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

// Servicio que maneja el envío de mensajes del formulario de contacto.
// Por ahora abre el cliente de correo del usuario con los datos
// pre-cargados usando el protocolo mailto.
// La dirección de destino se define en environment.ts (línea 8).
@Injectable({ providedIn: 'root' })
export class ContactService {
  // Leemos el correo destino desde la constante de entorno.
  // Está definida en src/environments/environment.ts, línea 8.
  private readonly targetEmail = environment.contactEmail;

  // Abre el cliente de correo con los datos del formulario.
  // Recibe nombre, email del remitente y el mensaje.
  send(data: { nombre: string; email: string; mensaje: string }): void {
    const subject = encodeURIComponent(`Mensaje de ${data.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nCorreo: ${data.email}\n\nMensaje:\n${data.mensaje}`
    );
    window.location.href = `mailto:${this.targetEmail}?subject=${subject}&body=${body}`;
  }
}
