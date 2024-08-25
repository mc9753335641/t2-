import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-data2',
  standalone: true,
  imports: [],
  templateUrl: './data2.component.html',
  styleUrl: './data2.component.css',
  inputs:['pdata'],
  outputs:['child']
})
export class Data2Component {
 pdata:any;
 child= new EventEmitter();
 constructor(){}
 retdata(lol:any)
 {
this.child.emit(lol)
 }
}
