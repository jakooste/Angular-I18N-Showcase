import {Component, computed, Signal} from '@angular/core';
import {PageInfoService} from '../page-info.service';

@Component({
  selector: 'app-tab-wydatki',
  standalone: false,

  templateUrl: './tab-wydatki.component.html',
  styleUrl: './tab-wydatki.component.css'
})
export class TabWydatkiComponent {
  constructor(pageinfoService: PageInfoService) {
    this.wydatki = computed(() => pageinfoService.wydatki);
  }
  wydatki : Signal<string[][]>;


  imie : string = $localize`:metadane:Tomek`;


  zmi = this.imie;
}
