import { Usuario } from './models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  CadastroForm: FormGroup;
  Usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    let senha = new FormControl('', [Validators.required,  CustomValidators.rangeLength([6,15])]);
    let connfirmSenha = new FormControl('', [Validators.required,  CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.CadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      confirmasenha: connfirmSenha
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
