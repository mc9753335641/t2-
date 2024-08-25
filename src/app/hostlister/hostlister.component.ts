import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlister',
  standalone: true,
  imports: [],
  templateUrl: './hostlister.component.html',
  styleUrl: './hostlister.component.css'
})
export class HostlisterComponent {
@HostListener("click",['$event'])
show()
{
  alert("hi manish")
}
}
