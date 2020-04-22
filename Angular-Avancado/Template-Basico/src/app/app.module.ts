import { BarService } from './demos/bar-di-zones/bar/bar.service';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { CadastroGuard } from './services/cadastro.guard';
import { ProdutoAppComponent } from './demos/arquitetura-componentes/produto.app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { HttpClientModule } from '@angular/common/http';

export const BAR_PROVIDERS: Provider[] = [
  BarService
];

@NgModule({
  declarations: [
    ProdutoAppComponent,
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    NavegacaoModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'}
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
