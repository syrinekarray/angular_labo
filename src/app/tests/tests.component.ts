import { User } from './../users/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Test } from './test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnInit {
  tests: Test[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    this.userService.getAllTests().subscribe((tests) => (this.tests = tests));
  }
}
