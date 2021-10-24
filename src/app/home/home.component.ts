import { User } from './../users/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  role = '';
  user: User | null = null;

  userForm = false;
  testForm = false;
  resultForm = false;
  techForm = false;
  usersList = false;
  constructor() {}

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('token')!);

    this.role = data.user.role;
    this.user = data.user;
  }

  addUser() {
    this.userForm = true;
    this.testForm = false;
    this.resultForm = false;
    this.techForm = false;
    this.usersList = false;
  }
  addTest() {
    this.userForm = false;
    this.testForm = true;
    this.resultForm = false;
    this.techForm = false;
    this.usersList = false;
  }
  addResult() {
    this.userForm = false;
    this.testForm = false;
    this.resultForm = true;
    this.techForm = false;
    this.usersList = false;
  }
  addTech() {
    this.userForm = false;
    this.testForm = false;
    this.resultForm = false;
    this.techForm = true;
    this.usersList = false;
  }
  showUsers() {
    this.userForm = false;
    this.testForm = false;
    this.resultForm = false;
    this.techForm = false;
    this.usersList = true;
  }
}
