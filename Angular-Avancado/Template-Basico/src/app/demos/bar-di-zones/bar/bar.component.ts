import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock, BarFactory, BebidaService } from './bar.service';
import { Component, OnInit, inject, Inject, Injector } from '@angular/core';

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
    private bebidaService: BebidaService) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfigManualConst;
    this.dadosUnidade = this.barServices.obterUnidade();
    this.barbebida2 = this.bebidaService.obterBebidas();
  }
}
