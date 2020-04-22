import { BarService, BarServiceMock } from './bar.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private barServices: BarService) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
  }
}
