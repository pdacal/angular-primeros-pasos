import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // emisor de eventos, neste caso o character creado no formulario
  @Output() //o decorador permite que se emita
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter () : void{
    // co debugger ó executalo na web podemos ver unha vista de debug no navegador.
    // debugger;
    console.log(this.character);
    if ( this.character.name.length === 0 ){return;}
    this.onNewCharacter.emit(this.character);
    this.character = {name:'',power:0};
    // sacao e pone a 0 de novo
    // this.character.name="",
    // this.character.power=0
  }
}
