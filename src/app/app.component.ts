import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompSuccessDirective, CompFailureDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
