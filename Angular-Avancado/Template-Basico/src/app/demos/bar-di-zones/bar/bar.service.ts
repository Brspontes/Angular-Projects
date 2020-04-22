import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

export function BarFactory(http: HttpClient, injector: Injector){
  return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService {

  constructor(private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManualConst: BarUnidadeConfig) { }


  public obterUnidade(): string{
    return 'Unidade ID: ' + this.ApiConfigManualConst.unidadeId + ' Token: ' + this.ApiConfigManualConst.unidadeToken;
  }

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porcoes';
  }

  obterRefeicoes(): string{
    return 'Refeicoes';
  }
}

export class BarServiceMock {

  constructor(private http: HttpClient) { }

  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeicoes(): string{
    return 'Mock';
  }
}

export abstract class BebidaService{
  obterBebidas: () => string
}