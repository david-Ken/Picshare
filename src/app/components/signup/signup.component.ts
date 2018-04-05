import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MyDatePickerModule } from 'mydatepicker';
import { IMyDpOptions } from 'mydatepicker';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/AuthService/auth.service';
import { PhotoBoardService } from '../../services/photo-board.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: null
  }

  newUserData = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    biographie: '',
    birthdate: null
  };

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private translate: TranslateService, private photoBoardDataService: PhotoBoardService, private auth: AuthService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {


      this.newUserData.lastname = this.newUser.lastName;
      this.newUserData.firstname = this.newUser.firstName;
      this.newUserData.email = this.newUser.email;
      this.newUserData.password = this.newUser.password;
      this.newUserData.birthdate = this.newUser.birthdateInfo.formatted;
      this.newUserData.username = 'RaynaudOLI';
      this.newUserData.biographie = 'toujour plus de text';
      //  this.newUserData.birthdate = this.newUser.birthdateInfo.formatted;

      console.log(this.newUserData);
      this.photoBoardDataService.addUser(this.newUserData).subscribe(serverResponse => console.log(serverResponse));
    }
    /* reset after submit 
        this.newUser = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          birthdate: null
        }
    */
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

}
