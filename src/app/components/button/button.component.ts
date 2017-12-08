import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[plrs-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() primary = false;
  @HostBinding('class.Button') button = true;

  constructor() { }

  ngOnInit() {
  }

}
