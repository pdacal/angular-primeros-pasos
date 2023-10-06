import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  // usamos o parametro para inxectar o noso servicio
  // esto habliita, en todo o maiin-page, a inf que conten o Service
  constructor( private dbzService: DbzService) {

  }
  // metodos auxiliares para extraer os metodos do Service, estos usanse no MAIN

  //1- necesario se temos o servicio como PRIVATE, para sacar os persoaxes
  get characters(): Character[] {
    // pode facerse sen os ... e os [], pero asi:
    // creamos unha copia, enon modificamos os valores reais
    return [...this.dbzService.characters];
  }
  // 2- un metodo auxiliar par ausar os metodos do service, que é PRIVADOS
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
// 3-
  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }

}


