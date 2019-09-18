import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mydata: number[];

  constructor() {
    this.fillArrayWithRandomNumbers();
  }

  fillArrayWithRandomNumbers() {
    this.mydata = [];
    for(let i = 0; i < 10; i++) {
        this.mydata.push(Math.random());
    }
  }

  changeData() {
      this.fillArrayWithRandomNumbers();
  }

}
