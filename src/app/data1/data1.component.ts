import { Component } from '@angular/core';
import { Data2Component } from '../data2/data2.component';

@Component({
  selector: 'app-data1',
  standalone: true,
  imports: [Data2Component],
  templateUrl: './data1.component.html',
  styleUrl: './data1.component.css',

})
export class Data1Component {
pdata:any;
ki:any;
setdata(cdata:any)
{
this.ki=cdata;
}
}
