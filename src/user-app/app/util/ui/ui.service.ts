import { Injectable } from '@angular/core';

@Injectable()
export class UIService {
    private globalStyles = ['index-page', 'public-action-page', 'profile-page'];
    private transparentNavbar = true;
    private fixedHeaderScreens = ['#/secure/profile/edit'];
    constructor() {
        console.log('Created UI service');
    }
    setTransparentNavbar(value: boolean) {
        if (this.fixedHeaderScreens.indexOf(window.location.hash) !== -1) {
            this.transparentNavbar = false;
        } else {
            this.transparentNavbar = value;
        }
    }
    getTransparentNavbar() {
        return this.transparentNavbar;
    }
    setGlobalUIStyle(className: string) {
        const body = document.getElementsByTagName('body')[0];
        this.globalStyles.forEach(function(style) {
            body.classList.remove(style);
        });
        body.classList.add(className);
    }
    unSetGlobalUIStyle(className: string) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove(className);
    }
}
