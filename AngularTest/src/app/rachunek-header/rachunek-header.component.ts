import {Component, computed, Input} from '@angular/core';

@Component({
  selector: 'app-rachunek-header',
  standalone: false,

  templateUrl: './rachunek-header.component.html',
  styleUrl: './rachunek-header.component.css'
})
export class RachunekHeaderComponent {
  @Input() nazwa = "Rachunek Bez Tytułu";
  @Input() ikona_sciezka = "./resources/uploaded/noicon.png";

  ikona_alt = computed(() => "ikona rachunku " + this.nazwa);
}
