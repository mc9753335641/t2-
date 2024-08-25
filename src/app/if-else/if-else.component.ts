import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
istrue:any=true;
a=10;
b=20;
case:any;
setdata(value:any)
{
this.istrue=value;
}
getdata(value:any)
{
this.case=value
}
}
