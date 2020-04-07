import { Usuario } from './models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  CadastroForm: FormGroup;
  Usuario: Usuario;
  formResult: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      confirmasenha: ['']
    });
  }

  adicionarUsuario(){
    if(this.CadastroForm.dirty && this.CadastroForm.valid){
      this.Usuario = Object.assign({}, this.Usuario, this.CadastroForm.value);
      this.formResult = JSON.stringify(this.CadastroForm.value);
    } else{
      this.formResult = "Não submeteu";
    }
  }
}
