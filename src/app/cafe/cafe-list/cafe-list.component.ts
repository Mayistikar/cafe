import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafeList : Cafe[] = [];

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.cafeService.getCafeList().subscribe((cafeList) => {
      this.cafeList = cafeList;
    });
  }

}
