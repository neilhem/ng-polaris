import { Component, Input, OnInit } from '@angular/core';

interface PagePagination {
  hasPrevious: boolean;
  hasNext: boolean;
}

@Component({
  selector: 'plrs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() pagination: PagePagination;

  constructor() { }

  ngOnInit() {
  }

}
