import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  CadastroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.CadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmasenha: new FormControl('')
    });
  }

  adicionarUsuario(){
    let x = this.CadastroForm.value;
  }

}
