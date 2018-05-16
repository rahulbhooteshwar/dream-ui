import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule.forRoot()],
    declarations: [NavbarComponent, FooterComponent],
    exports: [NavbarComponent, FooterComponent],
    providers: []
})
export class SharedModule {}
