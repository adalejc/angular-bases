import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán america'];
  public heroeBorrado: string = '';

  get heroeBorradoEnabled(): boolean {

    return (this.heroeBorrado) ? true : false
  }

  borrarHeroe() {
    //console.log('borrando...');
    //this.heroes.splice(0,1);

    //elimina el primer elemento del arrglo y lo retorna
    //this.heroeBorrado = this.heroes.shift() || '';

    //elimina el ultimo elemento del arreglo y lo retorna
    this.heroeBorrado = this.heroes.pop() || '';
  }
  

}
