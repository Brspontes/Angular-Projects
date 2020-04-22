import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock, BarFactory, BebidaService } from './bar.service';
import { Component, OnInit, inject, Inject, Injector, NgZone } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    //{provide: BarService, useClass: BarService},
    {provide: BarService, useFactory: BarFactory, deps:[HttpClient, Injector]},
    {provide: BebidaService, useExisting: BarService}
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  dadosUnidade: string;
  barbebida2: string;

  constructor(private barServices: BarService, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManualConst: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfigManualConst;
    this.dadosUnidade = this.barServices.obterUnidade();
    this.barbebida2 = this.bebidaService.obterBebidas();
  }

  public progress: number = 0;
  public label: string

  processWithinAngularZone(){
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro'));
  }

  processOutsideOfAngularZone(){
    this.label = 'Fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => {console.log('Finalizado fora');})
      })
    })
  }

  _increaseProgress(doneCallback: () => void){
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);
    if(this.progress < 100){
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else{
      doneCallback();
    }
  }
}
