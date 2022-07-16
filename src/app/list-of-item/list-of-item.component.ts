import { Component, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-list-of-item',
  templateUrl: './list-of-item.component.html',
  styleUrls: ['./list-of-item.component.scss']
})
export class ListOfItemComponent implements OnInit , OnChanges {
@Input() textoHijo!:string;
listChanges : string[]=[];
valorPrevio!:string;

  constructor() { }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
           this.listChanges.push(this.textoHijo);
  }


  ngOnInit(): void {
    
    
  }

  

}
