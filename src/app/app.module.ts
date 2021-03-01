import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './components/heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// Tarea 
// Crear un módulo llamado ContadorModule
// claraciones, y exportaciones para utilizar el modulo


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
