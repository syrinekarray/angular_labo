import { CreateResultat } from './../resultat/resultat';
import { Test } from './../tests/test';
import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css'],
})
export class CreateResultComponent implements OnInit {
  constructor(private testService: TestService) {}
  result: CreateResultat = {
    text: '',
    test: undefined,
  };
  tests: Test[] = [];
  ngOnInit(): void {
    this.getTestsWithoutResult();
  }

  getTestsWithoutResult() {
    this.testService.getTestsWithoutResult().subscribe((data: any) => {
      this.tests = data;
    });
  }

  createResult() {
    this.testService.createResult(this.result).subscribe((data: any) => {
      console.log(data);
    });
  }
}
