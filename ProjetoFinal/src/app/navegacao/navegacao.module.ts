import { RouterModule } from '@angular/router';
//declarações básicas para funcionamento do modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
    declarations:[
        FooterComponent, 
        HomeComponent, 
        MenuComponent, 
        NotfoundComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        FooterComponent, 
        HomeComponent, 
        MenuComponent, 
        NotfoundComponent
    ]
})
export class NavegacaoModule { }