import { Component } from '@angular/core';
import { fadeAnimation } from './animate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class AppComponent {
  title = 'portfolio';
}
