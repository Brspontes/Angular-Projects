import { LocalStorageUtils } from './../utils/localstorage';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class FornecedorGuard implements CanActivate{

    localSorageUtils = new LocalStorageUtils();

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if(!this.localSorageUtils.obterTokenUsuario()){
            this.router.navigate(['/conta/login']);
        }

        let user = this.localSorageUtils.obterUsuario();
        let claim: any = route.data[0];

        if(claim !== undefined){
            let claim: any = route.data[0]['claim'];
            
            if(claim){
                if(!user.claims){
                    this.navegarAcessoNegado();
                }

                let userClaims = user.claims.find(x => x.type === claim.nome);

                if(!userClaims){
                    this.navegarAcessoNegado();
                }

                let valorClaim = userClaims.value as string;

                if(!valorClaim.includes(claim.valor)){
                    this.navegarAcessoNegado();
                }
            }
        }

        return true;
    }

    navegarAcessoNegado(){
        this.router.navigate(['acesso-negado']);
    }

}
