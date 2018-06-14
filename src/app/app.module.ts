import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms'
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';

import { FilterPipe } from './shared/filter/filter.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectComponent } from './components/project/project.component';
import { VinylComponent } from './components/vinyl/vinyl.component';
import { MovieComponent } from './components/movie/movie.component';
import { BookComponent } from './components/book/book.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogComponent } from './components/log/log.component';
import { UserComponent } from './components/user/user.component';

import { UserFormComponent } from './components/user/user-form/user-form.component';
import { VinylFormComponent } from './components/vinyl/vinyl-form/vinyl-form.component';
import { SkillFormComponent } from './components/skill/skill-form/skill-form.component';
import { ProjectFormComponent } from './components/project/project-form/project-form.component';
import { MovieFormComponent } from './components/movie/movie-form/movie-form.component';
import { ResumeFormComponent } from './components/resume/resume-form/resume-form.component';

import { PaginationComponent } from './shared/pagination/pagination.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


import { BookService } from './services/book.service';
import { ContactService } from './services/contact.service';
import { LogService } from 'src/app/services/log.service';
import { MovieService } from './services/movie.service';
import { ProjectService } from './services/project.service';
import { ResumeService } from './services/resume.service';
import { SkillService } from './services/skill.service';
import { UserService } from './services/user.service';
import { VinylService } from './services/vinyl.service';
import { BookFormComponent } from './components/book/book-form/book-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ResumeComponent,
    ProjectComponent,
    VinylComponent,
    MovieComponent,
    BookComponent,
    ContactComponent,
    LogComponent,
    UserComponent,
    PaginationComponent,
    SpinnerComponent,
    FilterPipe,
    UserFormComponent,
    VinylFormComponent,
    SkillFormComponent,
    ProjectFormComponent,
    MovieFormComponent,
    ResumeFormComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    BookService,
    ContactService,
    LogService,
    MovieService,
    ProjectService,
    ResumeService,
    SkillService,
    UserService,
    VinylService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {

  }
}
