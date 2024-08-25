import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-ractivform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ractivform.component.html',
  styleUrl: './ractivform.component.css'
})
export class RactivformComponent {
constructor( private _fb:FormBuilder)
{

}
regform=this._fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  pass:['',Validators.required]
})
getdata(value:any)
{
  console.log(value.value)
}
}
