import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

// en js os obxetos pasxn por referencia, non sempre nos interesa eso

// de non ter providedIn:root, teriamos que tdefinir os servicios en providers de app.module.ts
// ó ter providedIn:root -> o noso servicio fai facer un singleton en toda a app
// |!!e dicir, mentras o use mediante a inxeccion de dependencias,
// |!! da igual en cantos sitios o use, sempre terei a mesma instancia do seu valor
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: "Krillin", power: 1000 },
    { id: uuid(), name: "Goku", power: 9500 },
    { id: uuid(), name: "Vegeta", power: 7500 }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      // co ... toma as propiedades e esparceas nese novo obxeto que creamos
      id: uuid(),
      ...character
    }

    // push, o final, unshif o principio do array
    // así engadimos o persoaxe creado, e enviado polo EmitCharacter e metese no final do array
    this.characters.push(newCharacter);

  }
  // este metodo borra a posicion do array que lle enviamos
  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }
  deleteCharacterById(id: string) {
    // quedamonos cos caracteres que non teñen ese id
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
