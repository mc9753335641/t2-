import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   arrr:any[]=[100];

  constructor() {
   }
somedata(val:any)
{
  this.arrr.push(val)
}
getdata()
{
 return this.arrr
}
}
