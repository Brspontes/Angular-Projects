import { LocalStorageUtils } from './../Utils/localstorage';
import { CadastroComponent } from './../conta/cadastro/cadastro.component';
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class Contaguard implements CanDeactivate<CadastroComponent>, CanActivate{
    
    localStorage = new LocalStorageUtils();

    constructor(private router: Router){}

    canActivate() {
        if(this.localStorage.obterTokenUsuario()){
            this.router.navigate(['/home']);
        }

        return true;
    }

    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
        }

        return true;
    }

}