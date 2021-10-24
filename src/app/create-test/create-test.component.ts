import { TestService } from './../services/test.service';
import { TestCreate } from './../tests/test';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../users/user';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
})
export class CreateTestComponent implements OnInit {
  testCreate: TestCreate = {
    name: '',
    price: 0,
    user: { id: 0 },
  };
  users: User[] | undefined;

  constructor(
    private testService: TestService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  createTest() {
    this.testService.createTest(this.testCreate).subscribe((data: any) => {
      console.log(data);
    });
  }

  get() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}
