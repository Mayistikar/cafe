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
  origenCount : number = 0;
  blendCount : number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.cafeService.getCafeList().subscribe((cafeList) => {
      this.cafeList = cafeList;

      this.origenCount = this.cafeList.filter(
        (cafe) => cafe.tipo === 'Café de Origen',
      ).length;

      this.blendCount = this.cafeList.filter(
        (cafe) => cafe.tipo === 'Blend',
      ).length;
    });
  }

}
