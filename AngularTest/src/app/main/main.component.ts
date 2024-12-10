import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  _gender = "male";

  male() {
    this._gender = "male";
  }
  female() {
    this._gender = "female";
  }
  other_gender() {
    this._gender = "other";
  }

}
