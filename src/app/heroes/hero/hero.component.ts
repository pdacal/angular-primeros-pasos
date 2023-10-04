// clase + decorador(define selector, template, estilos)
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
// Angular ten two way data biding
//priorizar one way, cambiar as cousas
//so nun sitio, exemplo: só eiqui e non no html tamen
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name}  - ${this.age}`;
  }
  changeHero(): void {
    this.name = "Spiderman";
  }
  changeAge(): void {
    this.age = 27;
  }
  resetForm(): void {
    this.name = "Ironman";
    this.age = 45;
  // asi substitue todos os h1(contido) por esa frase, o cciclo deteccion agular non o detecta x sr js
    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML ='<h1>Desde Angular</h1>'
    // })
  }
}
