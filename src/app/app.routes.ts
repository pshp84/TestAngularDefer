import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:"full"},
    {path:'', component:LayoutComponent, children:[
        {path:'home', component: HomeComponent }
    ]}
];
