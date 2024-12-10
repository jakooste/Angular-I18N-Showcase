import {Component} from '@angular/core';
import {PageInfoService} from '../page-info.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title: string;

  constructor(service: PageInfoService) {
    this.title = service.pageTitle;
  }
}
