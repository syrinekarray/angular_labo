import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { Labo } from './labo';

@Component({
  selector: 'app-labo-detail',
  templateUrl: './labo-detail.component.html',
  styleUrls: ['./labo-detail.component.css'],
})
export class LaboDetailComponent implements OnInit {
  labo: Labo | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLabo();
  }

  getLabo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getLabo().subscribe((laboData) => {
      this.labo = laboData;
    });
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.save();
  }
}
