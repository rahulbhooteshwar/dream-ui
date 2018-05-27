import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionModule } from 'ngx-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditBasicInfoComponent } from './edit-profile/edit-basic-info/edit-basic-info.component';
import { EditImagesComponent } from './edit-profile/edit-images/edit-images.component';
import { EditCareerComponent } from './edit-profile/edit-career/edit-career.component';
import { EditPartnerPrefComponent } from './edit-profile/edit-partner-pref/edit-partner-pref.component';
import { EditHobbiesIntComponent } from './edit-profile/edit-hobbies-int/edit-hobbies-int.component';
import { EditFamilyDetailsComponent } from './edit-profile/edit-family-details/edit-family-details.component';
import { EditPhoneComponent } from './edit-profile/edit-phone/edit-phone.component';
import { EditEmailComponent } from './edit-profile/edit-email/edit-email.component';
import { EditLocationComponent } from './edit-profile/edit-location/edit-location.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
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
    declarations: [ProfileComponent, EditProfileComponent, EditBasicInfoComponent, EditImagesComponent, EditCareerComponent, EditPartnerPrefComponent, EditHobbiesIntComponent, EditFamilyDetailsComponent, EditPhoneComponent, EditEmailComponent, EditLocationComponent]
})
export class ProfileModule {}
