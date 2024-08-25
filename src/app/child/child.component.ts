import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['pdata'],
  outputs:['child']
})
export class ChildComponent {
pdata:any;
child=new EventEmitter()
setdata(value:any)
{
this.child.emit(value)
}
}
