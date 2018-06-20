import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { ResumeComponent } from 'src/app/components/resume/resume.component';
import { ProjectComponent } from 'src/app/components/project/project.component';
import { VinylComponent } from 'src/app/components/vinyl/vinyl.component';
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { BookComponent } from 'src/app/components/book/book.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { LogComponent } from 'src/app/components/log/log.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserFormComponent } from 'src/app/components/user/user-form/user-form.component';
import { SkillFormComponent } from '../components/skill/skill-form/skill-form.component';
import { ResumeFormComponent } from '../components/resume/resume-form/resume-form.component';
import { ProjectFormComponent } from '../components/project/project-form/project-form.component';
import { VinylFormComponent } from '../components/vinyl/vinyl-form/vinyl-form.component';
import { MovieFormComponent } from '../components/movie/movie-form/movie-form.component';
import { BookFormComponent } from '../components/book/book-form/book-form.component';
import { LoginComponent } from "../components/login/login.component";
import { ContactFormComponent } from '../components/contact/contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
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
  { path: '**', component: HomeComponent }
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
