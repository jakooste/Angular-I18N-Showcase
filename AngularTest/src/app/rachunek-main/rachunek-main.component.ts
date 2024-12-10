import { Component } from '@angular/core';

@Component({
  selector: 'app-rachunek-main',
  standalone: false,

  templateUrl: './rachunek-main.component.html',
  styleUrl: './rachunek-main.component.css'
})
export class RachunekMainComponent {
  mode = 0;

  changeModeWydatki() {
    this.mode = 0;
  }

  changeModeCzlonkowie() {
    this.mode = 1;
  }

  changeModeRozliczenia() {
    this.mode = 2;
  }
}
