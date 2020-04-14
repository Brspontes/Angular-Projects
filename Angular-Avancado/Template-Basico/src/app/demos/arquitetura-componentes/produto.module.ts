import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.route';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoService } from './services/produto.service';

@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    exports:[

    ],
    providers:[
        ProdutoService
    ]
})

export class ProdutoModule{}