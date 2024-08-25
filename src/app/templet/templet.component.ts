import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templet.component.html',
  styleUrl: './templet.component.css'
})
export class TempletComponent {
getdata(value:NgForm)
{
  console.log(value.valid)
}
}
