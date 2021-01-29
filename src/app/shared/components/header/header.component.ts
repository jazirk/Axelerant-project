import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = ['About', 'Services', 'Solutions', 'Blog'];
  selectedItem: any;
  hamburgerClicked: boolean = false;
  @Output() clickEmitter = new EventEmitter();
  @Output() hamburgerClickedEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  goTo(item) {
    this.selectedItem = item;
    this.clickEmitter.emit(item);
  }

  navClicked() {
    this.hamburgerClicked = !this.hamburgerClicked;
    this.hamburgerClickedEmitter.emit(this.hamburgerClicked);
  }

}
