import { literal } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LPadreHijo';
  listItem = ['Alberto','Livan','Bill Gate','Paul Allen'];
  @Input() texto!:string;
  @Input() textoPadre!:string;


  InsertarItem(res:string){
    this.listItem.push(String(res));
    this.texto="";
  }
  EliminarUltimo(texto:string){
    this.listItem.pop();
  }

  getValue(event: Event): string {
    this.textoPadre = (event.target as HTMLInputElement).value;
    return (event.target as HTMLInputElement).value;
  }

  

}
