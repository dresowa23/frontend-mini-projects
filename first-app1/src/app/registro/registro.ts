import { Component,Input } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-registro',
  imports: [],
  template: `
    <section class="listing">
      <h2 class="listing-heading"> {{registro.name}} </h2>
      <p class="listing-ficha"> Altura: {{registro.height}} <br> Peso: {{registro.weight}} <br> Dorsal: {{registro.dorsal}} </p>
    </section>
  `,
  styleUrl: './registro.css',
})
export class Registro {
@Input() registro!: Datos;
}
