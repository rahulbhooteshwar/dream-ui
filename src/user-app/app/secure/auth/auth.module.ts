import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, SharedModule],
    declarations: [ChangePasswordComponent]
})
export class AuthModule {}
