import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock } from './bar.service';
import { Component, OnInit, inject, Inject } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    {provide: BarService, useClass: BarService}
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;

  constructor(private barServices: BarService, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfigManualConst: BarUnidadeConfig) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfigManualConst;
  }
}
