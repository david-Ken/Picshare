import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MyDatePickerModule } from 'mydatepicker';
import { IMyDpOptions } from 'mydatepicker';
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

  newUserData: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: null
  };

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private photoBoardDataService: PhotoBoardService) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      console.log(this.newUser);

      this.newUserData.lastName = this.newUser.lastName;
      this.newUserData.firstName = this.newUser.firstName;
      this.newUserData.email = this.newUser.email;
      this.newUserData.password = this.newUser.password;
      this.newUserData.birthdate = this.newUser.birthdateInfo.formatted;

      this.photoBoardDataService.addUser(this.newUserData);
    }
    /*
        this.newUser = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          birthdate: null
        }
    */
  }

}
