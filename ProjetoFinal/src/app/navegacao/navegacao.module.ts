import { RouterModule } from '@angular/router';
//declarações básicas para funcionamento do modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from './menu-login/menu-login.component';


@NgModule({
    declarations:[
        FooterComponent, 
        HomeComponent, 
        MenuComponent, 
        NotfoundComponent, 
        MenuLoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports:[
        FooterComponent, 
        HomeComponent, 
        MenuComponent, 
        NotfoundComponent,
        MenuLoginComponent
    ]
})
export class NavegacaoModule { }