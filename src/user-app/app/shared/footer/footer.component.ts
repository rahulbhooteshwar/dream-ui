import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    data: Date = new Date();
    focus;
    focus1;
    constructor() {}

    ngOnInit() {}
}
