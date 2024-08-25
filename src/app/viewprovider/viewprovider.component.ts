import { Component } from '@angular/core';
import { Out } from '../out';
class abc
{
  constructor()
  {
    console.log('hello')
  }
}
@Component({
  selector: 'app-viewprovider',
  standalone: true,
  imports: [],
  templateUrl: './viewprovider.component.html',
  styleUrl: './viewprovider.component.css',
  viewProviders:[abc,Out],
})
export class ViewproviderComponent {
constructor(private _abc:abc,private _out:Out)
{
console.log("decarative clsaa constructor")
console.log(_out.setdata())
}
}
