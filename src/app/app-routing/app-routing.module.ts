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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'vinyl', component: VinylComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'book', component: BookComponent },
  { path: 'contact', component: ContactComponent },
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
