import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styles: []
})
export class ListaprodutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produto: Produto[];

  ngOnInit(): void {
    this.produtoService.ObterProdutos()
      .subscribe(
        produtos => {
          this.produto = produtos;
          console.log(this.produto);
        },
        error => console.log(error)
      );
  }

}
