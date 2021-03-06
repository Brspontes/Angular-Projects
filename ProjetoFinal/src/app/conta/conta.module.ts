import { Contaguard } from './../services/conta.guard';
import { ContaService } from './services/conta.service';
import { ContaAppComponent } from './conta.app.component';
import { RouterModule } from '@angular/router';
import { ContaRoutingModule } from './conta.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators'

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService,
    Contaguard
  ]
})
export class ContaModule { }
