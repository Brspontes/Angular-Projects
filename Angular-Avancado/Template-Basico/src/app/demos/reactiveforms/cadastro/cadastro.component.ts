import { Usuario } from './models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  CadastroForm: FormGroup;
  Usuario: Usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmasenha: ['']
    });
  }

  adicionarUsuario(){
    this.Usuario = Object.assign({}, this.Usuario, this.CadastroForm.value);
  }
}
