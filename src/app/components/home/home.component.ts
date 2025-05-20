import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, AboutComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
