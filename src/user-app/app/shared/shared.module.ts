import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiFabComponent } from './multi-fab/multi-fab.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule.forRoot()],
    declarations: [NavbarComponent, FooterComponent, MultiFabComponent],
    exports: [NavbarComponent, FooterComponent, MultiFabComponent],
    providers: []
})
export class SharedModule {}
