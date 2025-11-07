import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss']
})
export class ClientePage {
  cliente: Cliente = { nombre: '', apellido: '', email: '', nacionalidad: '' };

  constructor(private clienteService: ClienteService, private router: Router) {}

  guardar(form: NgForm) {
    if (form.valid) {
      this.clienteService.setCliente(this.cliente);
      this.router.navigate(['/datos-cliente']);
    }
  }
}
