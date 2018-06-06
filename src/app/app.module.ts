import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectComponent } from './components/project/project.component';
import { VinylComponent } from './components/vinyl/vinyl.component';
import { MovieComponent } from './components/movie/movie.component';
import { BookComponent } from './components/book/book.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogComponent } from './components/log/log.component';
import { UserComponent } from './components/user/user.component';

import { LogService } from 'src/app/services/log.service';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BadgeComponent,
    ResumeComponent,
    ProjectComponent,
    VinylComponent,
    MovieComponent,
    BookComponent,
    ContactComponent,
    LogComponent,
    UserComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {

  }
}
