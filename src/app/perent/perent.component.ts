import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-perent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './perent.component.html',
  styleUrl: './perent.component.css'
})
export class PerentComponent {
  data:any;
newdata(value:any)
{
this.data=value;
}
}
