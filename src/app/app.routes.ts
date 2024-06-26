import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectComponent } from './pages/project/project.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Component } from '@angular/core';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},{
    path:'profile',
    component: ProfileComponent
},{
    path:'portafolio',
    component: PortafolioComponent
},{
    path:'project/create',
    component: CreateProjectComponent
},
{
    path: 'project/update/:id',
    component: CreateProjectComponent
},
{
    path:'project/:id',
    component:ProjectDetailComponent
}

];
