import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  constructor() { }

  nomes: string[] = ['Murilo', 'Marta', 'Antonia'];

  abrirPopup(nome: string) {
    alert(nome); 
  }
}
