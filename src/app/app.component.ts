import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from './services/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService, private auth: AuthService) {
    translate.setDefaultLang('fr');
    auth.handleAuthentication();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

}


