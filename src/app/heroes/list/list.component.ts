import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroNames:string[]=["Spiderman", "Ironman","Hulk","She Hulk", "Thor"];
  public deletedHero?: string;
  removeLastHero():void {
    // asi guardame o que borro
    this.deletedHero = this.heroNames.pop();
    // console.log({deletedHero});
  }


}