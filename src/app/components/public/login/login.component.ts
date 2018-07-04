import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@ViewChild('username') el: ElementRef;
  loginForm: FormGroup;
  user = new UserModel();
  usernameAlert: string = "Please fill username";
  passwordAlert: string = "Please fill password";
  loginAlert: string;
  loginError: boolean = false;
  returnUrl: string;

  constructor(private _route: ActivatedRoute, private _authenticationservice: UserService, private _router: Router) {
  }

  ngOnInit() {
    this._authenticationservice.logout();
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login() {
    this._authenticationservice.login(this.user)
      .pipe(first())
      .subscribe(
        res => {
          this._router.navigate([this.returnUrl]);
        },
        err => {
          return err;
        }
      );

  }

}
