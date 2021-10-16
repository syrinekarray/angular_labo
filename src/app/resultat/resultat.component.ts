import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UserService } from '../user.service';
import { User } from '../users/user';
import { resultat } from './resultat';

@Component({
  selector: 'app-user-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent implements OnInit {
  result: resultat | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getResultbyTestId(id).subscribe((resultat) => {
      this.result = resultat;
    });
  }
}
