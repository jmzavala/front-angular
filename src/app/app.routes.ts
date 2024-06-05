import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},{
    path:'profile',
    component: ProfileComponent
},{
    path:'project',
    component: ProjectComponent
}

];
