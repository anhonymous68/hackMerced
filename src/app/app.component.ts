import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hack-Merc';
  forOne = false;
  compileResult = '';

  constructor() {
    this.compileResult = 'a';
    this.forOne = false;
  }

  one() {
    this.forOne = true;
  }
}
