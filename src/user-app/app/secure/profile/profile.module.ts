import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionModule } from 'ngx-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        FormsModule,
        AccordionModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent
            },
            {
                path: 'edit',
                component: EditProfileComponent
            }
        ]),
        SharedModule
    ],
    declarations: [ProfileComponent, EditProfileComponent]
})
export class ProfileModule {}
