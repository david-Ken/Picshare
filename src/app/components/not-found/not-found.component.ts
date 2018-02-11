import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {

    var loop1, loop2, loop3, time = 30, i = 0, number, selector3: any = document.querySelector('.thirdDigit'), selector2: any = document.querySelector('.secondDigit'),
      selector1: any = document.querySelector('.firstDigit');

    loop3 = setInterval(function () {
      "use strict";
      if (i > 40) {
        clearInterval(loop3);
        selector3.textContent = 4;
      } else {
        selector3.textContent = this.randomNum();
        i++;
      }
    }, time);


    loop2 = setInterval(function () {
      "use strict";
      if (i > 80) {
        clearInterval(loop2);
        selector2.textContent = 0;
      } else {
        selector2.textContent = this.randomNum();
        i++;
      }
    }, time);


    loop1 = setInterval(function () {
      "use strict";
      if (i > 100) {
        clearInterval(loop1);
        selector1.textContent = 4;
      } else {
        selector1.textContent = this.randomNum();
        i++;
      }
    }, time);
  }
}