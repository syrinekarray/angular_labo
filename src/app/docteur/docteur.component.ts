import { ActivatedRoute, Routes } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { resultat } from '../resultat/resultat';
import { Test } from '../tests/test';
@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.css'],
})
export class DocteurComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  results: resultat[] | undefined;
  tests: Test[] | undefined;
  test: Test | undefined;

  ngOnInit(): void {
    this.getResults();
    this.getTests();
  }

  getResults() {
    this.userService.getAllResults().subscribe((data) => {
      this.results = data;
    });
  }

  getTests() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getTestById(id).subscribe((data) => {
      this.test = data;
    });
  }
}
