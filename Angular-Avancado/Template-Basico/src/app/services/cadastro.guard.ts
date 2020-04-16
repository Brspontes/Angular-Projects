import { CadastroComponent } from './../demos/reactiveforms/cadastro/cadastro.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
    canDeactivate(component: CadastroComponent){
        if(component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja descartar suas alterações?');
        }

        return true;
    }
}