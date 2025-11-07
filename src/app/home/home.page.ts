import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { CounterComponent } from '../components/counter/counter.component';
import { CalculadoraComponent } from '../components/calculadora/calculadora.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, CounterComponent, CalculadoraComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  parentCount = 0;
  milestoneMsg = '';

  valor1 = 0;
  valor2 = 0;
  resultados = { suma: 0, resta: 0, mult: 0, div: 0 };

  incrementFromParent() {
    this.parentCount++;
  }

  onMilestoneReached(event: number) {
  this.milestoneMsg = `Milestone alcanzado: ${event}`;
  }

  actualizarResultados(event: any) {
    this.resultados = event;
  }
}
