import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
