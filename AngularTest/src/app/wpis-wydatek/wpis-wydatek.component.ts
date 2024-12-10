import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wpis-wydatek',
  standalone: false,

  templateUrl: './wpis-wydatek.component.html',
  styleUrl: './wpis-wydatek.component.css'
})
export class WpisWydatekComponent {
  @Input() nazwa = "Wpis";
  @Input() kwota = "1";
  @Input() waluta = "PLN";
  @Input() autor = "Autor"
}
