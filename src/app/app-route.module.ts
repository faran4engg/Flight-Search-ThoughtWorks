import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'search',
        loadChildren: './components/search/search.module#SearchModule'
    }
];

export const routing = RouterModule.forRoot(routes);
