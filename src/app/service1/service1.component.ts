import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service1',
  standalone: true,
  imports: [],
  templateUrl: './service1.component.html',
  styleUrl: './service1.component.css'
})
export class Service1Component {
   lol:any[]=[];
  constructor(private _serviceService:ServiceService){

  }
adddata(val:any)
{
this._serviceService.somedata(val)
}
getdata()
{
 this.lol= this._serviceService.getdata()
}

}
