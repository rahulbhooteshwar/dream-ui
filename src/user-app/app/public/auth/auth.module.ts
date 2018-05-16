import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ]
})
export class AuthModule {}
