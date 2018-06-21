import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  user;
  pagedUsers = [];
  pageSize = 10;
  usersLoading;
  p: number = 1;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersLoading = true
    this._userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.pagedUsers = _.take(this.users, this, this.pageSize);
    },
      null,
      () => { this.usersLoading = false; });
  }

  deleteUser(user) {
    if (confirm("Are you sure you want to disactive user?")) {
      var index = this.users.indexOf(user)
      this._userService.deleteUser(user.userId)
        .subscribe(null,
          err => {
            alert("Could not delete the user.");
          });
    }
  }

  select(user) {
    this.user = user;
    this._userService.getUser(user.userId).subscribe(data => this.user = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedUsers = _.take(_.rest(this.users, startIndex), this.pageSize);
  }

}
