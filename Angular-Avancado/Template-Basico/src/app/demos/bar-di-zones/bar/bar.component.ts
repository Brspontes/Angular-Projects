import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock, BarFactory } from './bar.service';
import { Component, OnInit, inject, Inject, Injector } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    //{provide: BarService, useClass: BarService},
    {provide: BarService, useFactory: BarFactory, deps:[HttpClient, Injector]}
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  dadosUnidade: string;

  constructor(private barServices: BarService, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManualConst: BarUnidadeConfig) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfigManualConst;
    this.dadosUnidade = this.barServices.obterUnidade();
  }
}
