import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  @Input() valor1 = 0;
  @Input() valor2 = 0;
  @Output() resultados = new EventEmitter<{ suma: number; resta: number; mult: number; div: number }>();

  calcular() {
    const resultados = {
      suma: this.valor1 + this.valor2,
      resta: this.valor1 - this.valor2,
      mult: this.valor1 * this.valor2,
      div: this.valor2 !== 0 ? this.valor1 / this.valor2 : Infinity
    };
    this.resultados.emit(resultados);
  }
}
