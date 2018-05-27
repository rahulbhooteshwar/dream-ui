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
    sampleDate = new Date();
    isOpen = {
        'basic': true,
        'images': false,
        'career': false,
        'hobbies_int': false,
        'family_details': false,
        'partner_pref': false,
        'email': false,
        'phone': false,
        'location': false

    };
    constructor(public uiService: UIService) {}

    ngOnInit() {
        this.uiService.setTransparentNavbar(false);
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
