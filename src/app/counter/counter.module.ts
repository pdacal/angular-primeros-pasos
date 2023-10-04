import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// podemos agruppar utros modulos baixo components


// para que esta clase sexa un modulo
@NgModule({
  // declaramos a clase
  declarations: [CounterComponent],
  exports: [CounterComponent]
// papra poder usalo fora do propio modulo
})
export class CounterModule{}
