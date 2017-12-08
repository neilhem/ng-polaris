import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'plrs-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {

  @HostBinding('class.Pagination') pagination = true;

  constructor() { }

  ngOnInit() {
  }

}
