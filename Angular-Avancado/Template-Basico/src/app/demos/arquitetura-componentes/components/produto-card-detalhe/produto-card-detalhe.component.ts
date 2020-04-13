import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from './../../models/produto';

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

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  emitirEvento() :void {
    this.status .emit(this.produto);
  }
}
