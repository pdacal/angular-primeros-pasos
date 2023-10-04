import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   public title: string = 'Hello World';
   public counter:number = 10;

   public increaseBy(value : number):void {
      this.counter += value;
   }
   public resetCounter(){
    this.counter=10;
   }
}
