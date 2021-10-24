import { LoginRequest } from './../users/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loginRequest: LoginRequest = { email: '', password: '' };
  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginRequest);
  }
}
