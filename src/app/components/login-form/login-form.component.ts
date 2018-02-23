import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth.service';

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
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value, valid: boolean }) {
    if (!valid) {
      console.log("email or password invalid");
    } else {
      console.log(value);
    }
  }

}
