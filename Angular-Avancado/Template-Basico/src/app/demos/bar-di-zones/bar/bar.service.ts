import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BarService {

  constructor(private http: HttpClient) { }

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