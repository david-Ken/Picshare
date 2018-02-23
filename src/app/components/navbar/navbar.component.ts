import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../services/AuthService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private auth: AuthService) {
    translate.setDefaultLang('fr');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
