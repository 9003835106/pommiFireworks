import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChakkarComponent } from './chakkar/chakkar.component';
import { ListComponent } from './list/list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'list',component:ListComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'about-us',component:AboutUsComponent}
    
];
