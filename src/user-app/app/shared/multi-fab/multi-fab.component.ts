import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-fab',
  templateUrl: './multi-fab.component.html',
  styleUrls: ['./multi-fab.component.scss']
})
export class MultiFabComponent implements OnInit {
  expanded = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    onScroll() {
    this.expanded = false;
    }

}
