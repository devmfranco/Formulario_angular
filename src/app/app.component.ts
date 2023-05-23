import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreCompleto: string | undefined;
  viceMinisterioDireccion: string | undefined;
  ubicacionEspecifica: | undefined;
  numeroContacto:| undefined;
  ayudaNecesaria: string | undefined;
  tipoServicio: string| undefined;

  onSubmit() {
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Formulario enviado');
    console.log('Nombre completo: ' + this.nombreCompleto);
    console.log('Vice-ministerio o dirección: ' + this.viceMinisterioDireccion);
    console.log('Ubicación específica: ' + this.ubicacionEspecifica);
    console.log('Número de contacto o extensión: ' + this.numeroContacto);
    console.log('Ayuda necesaria: ' + this.ayudaNecesaria);
    console.log('Tipo de servicio: ' + this.tipoServicio);
  }
}
