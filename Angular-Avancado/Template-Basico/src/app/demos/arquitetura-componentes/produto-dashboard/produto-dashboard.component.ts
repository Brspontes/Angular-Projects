import { ProdutoCardDetalheComponent } from './../components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../components/produto-count/produto-count.component';
import { Produto } from './../models/produto';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
  }

  mudarStatus(event: Produto) :void {
    event.ativo = !event.ativo;
  }

  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>;

  ngAfterViewInit(): void {
    console.log('Objeto do contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto');
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    });
  }

}
