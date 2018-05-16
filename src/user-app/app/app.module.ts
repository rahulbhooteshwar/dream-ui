import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UIService } from './util/ui/ui.service';
import { AuthService } from './util/auth/auth.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        NgbModule.forRoot(),
        SharedModule,
        AppRoutingModule
    ],
    exports: [],
    providers: [AuthService, UIService],
    bootstrap: [AppComponent]
})
export class AppModule {}
