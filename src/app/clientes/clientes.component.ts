import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
    clientes = [];
    cliente: Cliente = {name: '', age: 0};

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.clientes.push(this.cliente);
    this.cliente = {name: '', age: 0};
  }
}
