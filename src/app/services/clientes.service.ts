import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente!: Cliente;

  setCliente(datos: Cliente) {
    this.cliente = datos;
  }

  getCliente(): Cliente {
    return this.cliente;
  }
}
