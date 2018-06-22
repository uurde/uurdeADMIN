import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/secured/home/home.component';
import { SkillComponent } from './components/secured/skill/skill.component';
import { ResumeComponent } from './components/secured/resume/resume.component';
import { ProjectComponent } from './components/secured/project/project.component';
import { VinylComponent } from './components/secured/vinyl/vinyl.component';
import { MovieComponent } from './components/secured/movie/movie.component';
import { BookComponent } from './components/secured/book/book.component';
import { ContactComponent } from './components/secured/contact/contact.component';
import { LogComponent } from './components/secured/log/log.component';
import { UserComponent } from './components/secured/user/user.component';

import { UserFormComponent } from './components/secured/user/user-form/user-form.component';
import { VinylFormComponent } from './components/secured/vinyl/vinyl-form/vinyl-form.component';
import { SkillFormComponent } from './components/secured/skill/skill-form/skill-form.component';
import { ProjectFormComponent } from './components/secured/project/project-form/project-form.component';
import { MovieFormComponent } from './components/secured/movie/movie-form/movie-form.component';
import { ResumeFormComponent } from './components/secured/resume/resume-form/resume-form.component';

import { PaginationComponent } from './shared/pagination/pagination.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';


import { BookService } from './services/book.service';
import { ContactService } from './services/contact.service';
import { LogService } from 'src/app/services/log.service';
import { MovieService } from './services/movie.service';
import { ProjectService } from './services/project.service';
import { ResumeService } from './services/resume.service';
import { SkillService } from './services/skill.service';
import { UserService } from './services/user.service';
import { VinylService } from './services/vinyl.service';
import { BookFormComponent } from './components/secured/book/book-form/book-form.component';
import { LoginComponent } from './components/public/login/login.component';
import { ContactFormComponent } from './components/secured/contact/contact-form/contact-form.component';
import { DashboardComponent } from './components/secured/dashboard/dashboard.component';
import { UserProfileComponent } from './components/secured/user/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
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
    UserFormComponent,
    VinylFormComponent,
    SkillFormComponent,
    ProjectFormComponent,
    MovieFormComponent,
    ResumeFormComponent,
    BookFormComponent,
    LoginComponent,
    ContactFormComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularEditorModule,
    FilterPipeModule
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
