import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent {
  @Input() rutaImagen: {} | undefined;//ES IMPORTANTE ESPECIFICARLE QUE VA A RECIBIR UN OBJETO
  @Input() cast: string | undefined;
  @Input() titl: string | undefined;
  @Input() texto: string | undefined;
  @Input() url: String | undefined;
}
