import { Component } from '@angular/core';
import { Registro } from '../registro/registro';
import { Datos } from '../datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Registro,CommonModule],
  template: `
    <section>
      <input type="text" placeholder="Filter by the ID">
      <button type="button" class="primary">Search</button>
    </section>
    <section class="results">
      <app-registro *ngFor="let datos of datosList" [registro]="datos"></app-registro>
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
datosList : Datos []=[
{
  id: 1,
  name: 'Lionel Messi',
  height: 1.73,
  weight: 89.45,
  dorsal: 10
},
{
  id: 2,
  name: 'Cristiano Ronaldo',
  height: 1.98,
  weight: 95.67,
  dorsal: 7
}
] 
}
