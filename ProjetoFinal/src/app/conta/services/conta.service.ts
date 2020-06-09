import { Usuario } from './../models/usuario';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class ContaService extends BaseService {
    //Quando extender uma classe chamar o super no construtor
    constructor(private http: HttpClient) { super(); }

    
    registrarUsuario(usuario: Usuario) : Observable<Usuario> {
        let response = this.http.post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
        .pipe(
            //Caminho feliz
            map(this.extractData),
            catchError(this.serviceError))

        return response;
    }

    login(usuairo: Usuario) {

    }
}