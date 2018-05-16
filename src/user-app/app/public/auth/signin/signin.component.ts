import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIService } from '../../../util/ui/ui.service';

@Component({
    selector: 'user-app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
    constructor(private uiService: UIService) {}

    ngOnInit() {
        this.uiService.setGlobalUIStyle('public-action-page');
        this.uiService.setTransparentNavbar(true);
    }
    ngOnDestroy() {
        this.uiService.unSetGlobalUIStyle('public-action-page');
    }
}
