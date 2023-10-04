/*
// Importamos component de angular/core
import { Component} from '@angular/core';
// transforma a clase nun componente
// debemos metelo nun modulo para poder usalo, no arquivo app.module.ts, en declarations
// senon non funciona
@Component({
  // nome, asi lle vou chamar ó componente
  selector: "app-counter",
  // usamos esto para mostralo na web
  template: "<h1>Hola Counter</h1>",
})
export class CounterComponent{


}
*/
//a-comp +tab
import { Component } from '@angular/core';

@Component({
  selector: "app-counter",
  //importante back-ticks!! ->senon ERRO
  template: `
  <h3>Counter : {{ counter }}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
`
})

export class CounterComponent {
  public counter:number = 10;

  public increaseBy(value : number):void {
     this.counter += value;
  }
  public resetCounter(){
   this.counter=10;
  }

}
