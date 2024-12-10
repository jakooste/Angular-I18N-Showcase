import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-czlonkowie',
  standalone: false,

  templateUrl: './tab-czlonkowie.component.html',
  styleUrl: './tab-czlonkowie.component.css'
})
export class TabCzlonkowieComponent {
  liczba_czlonkow = 0;
  lista_plci = [["M", "mężczyzna"], ["K", "kobieta"], ["I", "inna płeć"]];
  wybrana_plec = "M";
  kwota = 100;

  get wybrana() {
    return this.wybrana_plec;
  }
  wybranaM() {
    this.wybrana_plec = "M";
  }
  wybranaK() {
    this.wybrana_plec = "K";
  }
  wybranaI() {
    this.wybrana_plec = "I";
  }
}
