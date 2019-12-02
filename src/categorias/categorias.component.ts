import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stf-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {
  categorias:any;
  
  constructor() { }

  ngOnInit() {
    this.categorias = [
      { 'codigo': 1, 
        'nome': 'Lazer' },
  
      { 'codigo': 2, 
        'nome': 'Alimentacão' },
  
      { 'codigo': 3, 
        'nome': 'Supermercado' },
  
      { 'codigo': 4, 
        'nome': 'Farmácia' },
  
      { 'codigo': 5, 
        'nome': 'Outros' },
    ];
  }
}
