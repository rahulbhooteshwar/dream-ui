import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UIService } from '../../../util/ui/ui.service';

@Component({
    selector: 'user-app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy, AfterViewInit {
    showDropDown = false;
    constructor(private uiService: UIService) {}
    ngOnInit() {
        this.uiService.setGlobalUIStyle('public-action-page');
        this.uiService.setTransparentNavbar(true);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.showDropDown = true;
        }, 200);
    }
    ngOnDestroy() {
        this.uiService.unSetGlobalUIStyle('public-action-page');
    }
}
