import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from 'src/app/components/secured/home/home.component';
import { SkillComponent } from 'src/app/components/secured/skill/skill.component';
import { ResumeComponent } from 'src/app/components/secured/resume/resume.component';
import { ProjectComponent } from 'src/app/components/secured/project/project.component';
import { VinylComponent } from 'src/app/components/secured/vinyl/vinyl.component';
import { MovieComponent } from 'src/app/components/secured/movie/movie.component';
import { BookComponent } from 'src/app/components/secured/book/book.component';
import { ContactComponent } from 'src/app/components/secured/contact/contact.component';
import { LogComponent } from 'src/app/components/secured/log/log.component';
import { UserComponent } from 'src/app/components/secured/user/user.component';
import { UserFormComponent } from 'src/app/components/secured/user/user-form/user-form.component';
import { SkillFormComponent } from '../components/secured/skill/skill-form/skill-form.component';
import { ResumeFormComponent } from '../components/secured/resume/resume-form/resume-form.component';
import { ProjectFormComponent } from '../components/secured/project/project-form/project-form.component';
import { VinylFormComponent } from '../components/secured/vinyl/vinyl-form/vinyl-form.component';
import { MovieFormComponent } from '../components/secured/movie/movie-form/movie-form.component';
import { BookFormComponent } from '../components/secured/book/book-form/book-form.component';
import { LoginComponent } from "../components/public/login/login.component";
import { ContactFormComponent } from '../components/secured/contact/contact-form/contact-form.component';
import { UserProfileComponent } from '../components/secured/user/user-profile/user-profile.component';
import { DashboardComponent } from '../components/secured/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'skill/:id', component: SkillFormComponent },
      { path: 'skill/new', component: SkillFormComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'resume/:id', component: ResumeFormComponent },
      { path: 'resume/new', component: ResumeFormComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'project/:id', component: ProjectFormComponent },
      { path: 'project/new', component: ProjectFormComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'vinyl/:id', component: VinylFormComponent },
      { path: 'vinyl/new', component: VinylFormComponent },
      { path: 'vinyl', component: VinylComponent },
      { path: 'movie/:id', component: MovieFormComponent },
      { path: 'movie/new', component: MovieFormComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'book/:id', component: BookFormComponent },
      { path: 'book/new', component: BookFormComponent },
      { path: 'book', component: BookComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'contact/:id', component: ContactFormComponent },
      { path: 'log', component: LogComponent },
      { path: 'user/:id', component: UserFormComponent },
      { path: 'user/new', component: UserFormComponent },
      { path: 'user', component: UserComponent },
      { path: 'profile', component: UserProfileComponent }
    ]
  },
  { path: '**', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // {
      //   //enableTracing: true,
      //   //preloadingStrategy: SelectivePreloadingStrategy
      // }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
