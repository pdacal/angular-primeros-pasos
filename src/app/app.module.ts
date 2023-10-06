import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

// IMPORTANCIA o orde dos componentes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CounterModule,
    HeroesModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
