import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  private _pageTitle = $localize`:{nazwa witryny|string zawierający nazwę strony w mianowniku@@nazwa01}:Strona Testowa`;
  private _numberOfChairs = 1;
  private _numberOfMinutes = 1;
  private _gender = 0;
  private _wydatki = [["Wpis01", "12", "PLN", "Kuba"], ["Cokolwiek", "155", "USD", "Crick"]];

  constructor() { }

  get pageTitle() {
    return this._pageTitle;
  }

  get numberOfChairs() {
    return this._numberOfChairs;
  }
  set numberOfChairs(numberOfChairs) {
    this._numberOfChairs = numberOfChairs;
  }

  get numberOfMinutes() {
    return this._numberOfMinutes;
  }
  set numberOfMinutes(numberOfMinutes) {
    this._numberOfMinutes = numberOfMinutes;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get wydatki() {
    return this._wydatki;
  }
}
