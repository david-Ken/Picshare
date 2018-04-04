import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { PhotoBoardService } from '../../services/photo-board.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
  user = {
    email: null,
    password: null
  }

  show: boolean = false;

  response: any;
  constructor(private translate: TranslateService, private auth: AuthService, private photoBoardDataService: PhotoBoardService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value, valid: boolean }) {
    if (!valid) {
      console.log("email or password invalid");
    } else {
      console.log(value);
      /*this.response = */this.photoBoardDataService.connection(value).subscribe(serverResponse => console.log(serverResponse));

    }
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  toggleLanguage() {
    this.show = !this.show;
  }

}
