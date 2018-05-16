import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'public/auth',
        pathMatch: 'full'
    },
    {
        path: 'public/auth',
        loadChildren: 'user-app/app/public/auth/auth.module#AuthModule'
    },
    {
        path: 'secure/auth',
        loadChildren: 'user-app/app/secure/auth/auth.module#AuthModule'
    },
    {
        path: 'secure/profile',
        loadChildren: 'user-app/app/secure/profile/profile.module#ProfileModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: []
})
export class AppRoutingModule {}
