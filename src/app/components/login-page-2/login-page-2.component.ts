import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth.service';

import { PhotoBoardService } from '../../services/photo-board.service';

@Component({
  selector: 'app-login-page-2',
  templateUrl: './login-page-2.component.html',
  styleUrls: ['./login-page-2.component.css']
})
export class LoginPage2Component implements OnInit {
  user = {
    username: null,
    password: null
  }

  response: any;
  constructor(private auth: AuthService, private photoBoardDataService: PhotoBoardService) {
  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value, valid: boolean }) {
    if (!valid) {
      console.log("email or password invalid");
    } else {
      console.log(value);
      this.response = this.photoBoardDataService.connection(value).subscribe(serverResponse => console.log(serverResponse));

    }
  }

}







