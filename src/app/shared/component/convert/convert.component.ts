import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {
  inFijoAPosFijo,
  inFijoAPreFijo,
  tableInFijoToPosFijo,
  tableInFijoToPreFijo,
} from './tools/convert';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
})
export class ConvertComponent implements OnInit {
  navItemSelected = 0;

  resultValue: Array<string> = [];
  @Input() $data?: EventEmitter<string>;

  constructor() {}

  ngOnInit(): void {
    this.$data?.subscribe((data) => {
      // this.result = 'InFija ->\n' + data + '\n';
      this.resultValue[1] = inFijoAPreFijo(data);
      this.resultValue[0] = inFijoAPosFijo(data);
    });
  }

  getTable() {
    if (this.navItemSelected == 1) {
      return tableInFijoToPreFijo;
    } else if (this.navItemSelected == 0) {
      return tableInFijoToPosFijo;
    } else {
      return [];
    }
  }
}
