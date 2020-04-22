import { BarComponent } from './demos/bar-di-zones/bar/bar.component';
import { CadastroGuard } from './services/cadastro.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NotfoundComponent } from './navegacao/notfound/notfound.component';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard]},
    { path: 'sobre', component: SobreComponent },
    { path: 'bar', component: BarComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule), canLoad: [AuthGuard], canActivate: [AuthGuard]}, //canActivate: Prende a rota, para modulos lazeload ou não
    { path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule)},
    { path: 'filmes', component: FilmesComponent},
    { path: '**', component: NotfoundComponent} //404 sempre por ultimo nas rotas
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}

