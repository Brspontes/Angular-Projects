import { Produto } from './../../models/produto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styles: []
})
export class ProdutoCountComponent implements OnInit {

  @Input()
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
  }

  contadorAtivos(): number{
    if(!this.produtos) return;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }
}
