import { Fornecedor } from './../models/fornecedor';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FornecedorService } from './fornecedor.service';

@Injectable()
export class FornecedorResolve implements Resolve<Fornecedor>{
    constructor(private fornecedorService: FornecedorService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.fornecedorService.obterPorId(route.params['id']);
    }
}