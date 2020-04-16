import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Usuario } from './models/Usuario';
import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElemets: ElementRef[];

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  CadastroForm: FormGroup;
  Usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  mudancasNaoSalvas: boolean;

  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido',      
      },
      email: {
        required: 'Informe o e-mail',
        email: 'E-mail inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmasenha: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  //ASSIM QUE HTML VISIVEL PARA O USUARIO
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElemets
      .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

      merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processarMensagens(this.CadastroForm);
        this.mudancasNaoSalvas = true;
      });
  }

  ngOnInit() {
    let senha = new FormControl('', [Validators.required,  CustomValidators.rangeLength([6,15])]);
    let connfirmSenha = new FormControl('', [Validators.required,  CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.CadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
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

      this.mudancasNaoSalvas = false;
    } else{
      this.formResult = "Não submeteu";
    }
  }
}
