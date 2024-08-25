import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent {
arrr:any[]=['red','blue','green','cyan','yellow']
}
