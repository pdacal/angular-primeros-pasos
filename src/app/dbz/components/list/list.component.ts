import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  // para mostrar no componente da lista un array de characters, o @input permitenos meterlle un valor
  // na main-page.html veremos <dbz-list [CharacterList]="characters"
  // characters esta declarado en main-page.ts!!!, cos valores dentro
  @Input()
  public CharacterList: Character[] = [
    { name: "Trunk", power: 10 }
  ]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

    // recibe o index do persoaxe cando
    // pulsamos o boton, que ten enlazadp este metodo
  onDeleteCharacter(id?: string): void {
    // emite o index, estpo recollese, e borrase, dende main-page
    // emiteo coa axuda do onDelete, van da mao
    if(!id){return;}
    this.onDelete.emit(id);
  }



}
