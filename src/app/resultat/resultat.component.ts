import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { UserService } from '../services/user.service';
import { Resultat } from './resultat';

@Component({
  selector: 'app-user-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent implements OnInit {
  result: Resultat | undefined;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.testService.getResultbyTestId(id).subscribe((data: any) => {
      console.log(data);

      this.result = data;
    });
  }
}
