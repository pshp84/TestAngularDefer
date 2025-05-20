import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, SpinnerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
