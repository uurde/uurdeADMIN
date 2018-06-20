import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { VinylService } from 'src/app/services/vinyl.service';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css']
})
export class VinylComponent implements OnInit {
  vinyls: any;
  vinyl;
  pagedVinyls = [];
  pageSize = 10;
  vinylsLoading;
  p: number = 1;

  constructor(private _vinylService: VinylService) { }

  ngOnInit() {
    this.getVinyls();
  }

  getVinyls() {
    this.vinylsLoading = true
    this._vinylService.getAllVinyls().subscribe(data => {
      this.vinyls = data;
      this.pagedVinyls = _.take(this.vinyls, this, this.pageSize);
    },
      null,
      () => { this.vinylsLoading = false; });
  }

  deleteVinyl(vinyl) {
    if (confirm("Are you sure you want to disactive vinyl?")) {
      var index = this.vinyls.indexOf(vinyl)
      this._vinylService.deleteVinyl(vinyl.vinylId)
        .subscribe(null,
          err => {
            alert("Could not delete the vinyl.");
          });
    }
  }

  select(vinyl) {
    this.vinyl = vinyl;
    this._vinylService.getVinyl(vinyl.vinylId).subscribe(data => this.vinyl = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedVinyls = _.take(_.rest(this.vinyls, startIndex), this.pageSize);
  }

}
