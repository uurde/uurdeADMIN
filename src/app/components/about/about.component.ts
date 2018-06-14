import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts: any;
  about;
  pagedAbouts = [];
  pageSize = 10;
  aboutsLoading;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAbouts();
  }

  getAbouts() {
    this.aboutsLoading = true
    this._userService.getAllUsers().subscribe(data => {
      this.abouts = data;
      //this.pagedAbouts = _.take(this.abouts, this, this.pageSize);
    },
      null,
      () => { this.aboutsLoading = false; });
  }

  deleteAbout(about) {
    if (confirm("Are you sure you want to disactive about?")) {
      var index = this.abouts.indexOf(about)
      this._userService.deleteUser(about.aboutId)
        .subscribe(null,
          err => {
            alert("Could not delete the about.");
          });
    }
  }

  select(about) {
    this.about = about;
    this._userService.getUser(about.aboutId).subscribe(data => this.about = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedAbouts = _.take(_.rest(this.abouts, startIndex), this.pageSize);
  }

}
