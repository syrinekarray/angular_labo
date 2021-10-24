import { UserCreateDto } from './../users/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  @Input() role: string = '';
  userCreate: UserCreateDto = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    role: undefined,
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.role === 'admin') {
      this.userCreate.role = 'tech';
    }
  }

  add() {
    this.userService.createUser(this.userCreate).subscribe((data) => {
      console.log(data);
    });
  }
}
