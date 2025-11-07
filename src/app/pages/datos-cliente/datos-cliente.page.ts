import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClienteService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-datos-cliente',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './datos-cliente.page.html',
  styleUrls: ['./datos-cliente.page.scss']
})
export class DatosClientePage implements OnInit {
  cliente!: Cliente;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.cliente = this.clienteService.getCliente();
  }
}
