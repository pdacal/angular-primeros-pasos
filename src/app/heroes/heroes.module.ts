import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

// agrupamolos e exportamolos nun mesmo modulo, revisar app.module.ts

// ordear alfabeticamente os modulos a declarar
@NgModule({
  declarations:[HeroComponent,ListComponent],
  exports: [HeroComponent,ListComponent],
  imports: [CommonModule]
})
export class HeroesModule{}
