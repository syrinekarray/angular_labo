import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] | undefined;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  delete(id: number) {}
}
