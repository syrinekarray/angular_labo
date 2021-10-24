import { TestService } from './../services/test.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Test } from './test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnInit {
  @Input() id: number = 0;
  tests: Test[] = [];

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTestsByUserId(this.id).subscribe((data: any) => {
      this.tests = data;
      console.log(data);
    });
  }
}
