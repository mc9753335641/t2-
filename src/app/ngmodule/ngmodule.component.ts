import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodule',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ngmodule.component.html',
  styles: [`
    /* आप यहाँ अपनी CSS लिख सकते हैं */
  `]
})
export class NgmoduleComponent {
  lol: string = 'my name is manish'; // 'unknown' की बजाय 'string' उपयोग करें
}
