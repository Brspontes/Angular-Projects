import { Router } from '@angular/router';
import { LocalStorageUtils } from './../utils/localstorage';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    constructor(private router: Router){}

    localStorageUtils: LocalStorageUtils;
    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if(error instanceof HttpErrorResponse) {
                    if(error.status === 401){
                        this.localStorageUtils.limparDadosLocaisUsuario();
                        this.router.navigate(['/conta/login']);
                    }
                    if(error.status === 403){
                        this.router.navigate(['/acesso-negado']);
                    }
                }
                return throwError(error);
            })
        );
    }
}