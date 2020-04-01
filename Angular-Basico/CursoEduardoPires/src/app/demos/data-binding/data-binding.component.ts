import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg";
  public nome: string = "";

  AdicionarClique(): void {
    this.contadorClique = this.contadorClique + 1;
  }

  ZerarContador(): void {
    this.contadorClique = 0;
  }

  PerdaDeFoco(event: any) : void {
    this.nome = event.target.value;
  }
}
