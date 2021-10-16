import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users/user';
@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css'],
})
export class TechnicienComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users.slice(1, 5)));
  }
}
