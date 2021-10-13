import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';
import { GitHubUserComponent } from './githubuser.component';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'GitHub', component: GitHubComponent},
  {path: 'GitHub/user/:login/:score', component: GitHubUserComponent},
  {path: '**', component: NotFoundComponent}
])