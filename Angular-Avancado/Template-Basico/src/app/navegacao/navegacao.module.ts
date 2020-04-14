import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
    declarations:[
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotfoundComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotfoundComponent
    ]
})

export class NavegacaoModule {}