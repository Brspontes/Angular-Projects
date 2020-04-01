import { Routes } from '@angular/router';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

export const rootRouterConfig: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'featurebinding', component: DataBindingComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    
];