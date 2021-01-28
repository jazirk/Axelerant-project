import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = ['About', 'Services', 'Solutions', 'Blog'];
  selectedItem: any;
  @Output() clickEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  goTo(item) {
    this.selectedItem = item;
    this.clickEmitter.emit(item);
  }

}
