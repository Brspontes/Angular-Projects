import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor(private http: HttpClient){}

  protected UrlServer: string = "http://localhost:3000/";

  ObterProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlServer + "produtos");
  }
}
