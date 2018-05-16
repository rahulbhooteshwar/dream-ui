import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../util/ui/ui.service';
import * as is from 'is_js';

@Component({
    selector: 'user-app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
    is = is;
    isOpen = {
        'static-1': true,
        'static-2': false,
        'static-3': false
    };
    constructor(public uiService: UIService) {}

    ngOnInit() {
        this.uiService.setTransparentNavbar(false);
    }
}
