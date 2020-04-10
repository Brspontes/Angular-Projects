import { Produto } from './../../models/produto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styles: []
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
