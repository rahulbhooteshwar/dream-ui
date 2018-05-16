import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIService } from '../../util/ui/ui.service';

import * as is from 'is_js';
import * as _ from 'lodash';

@Component({
    selector: 'user-app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
    is = is;
    isOpen = {
        'static-1': true,
        'static-2': false,
        'static-3': false
    };
    constructor(public uiService: UIService) {}

    ngOnInit() {
        this.uiService.setGlobalUIStyle('profile-page');
        this.uiService.setTransparentNavbar(true);
    }
    ngOnDestroy() {
        this.uiService.unSetGlobalUIStyle('profile-page');
    }
}
