import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any;
  project;
  pagedProjects = [];
  pageSize = 10;
  projectsLoading;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsLoading = true
    this._projectService.getAllProjects().subscribe(data => {
      this.projects = data;
      //this.pagedProjects = _.take(this.projects, this, this.pageSize);
    },
      null,
      () => { this.projectsLoading = false; });
  }

  deleteProject(project) {
    if (confirm("Are you sure you want to disactive project?")) {
      var index = this.projects.indexOf(project)
      this._projectService.deleteProject(project.projectId)
        .subscribe(null,
          err => {
            alert("Could not delete the project.");
          });
    }
  }

  select(project) {
    this.project = project;
    this._projectService.getProject(project.projectId).subscribe(data => this.project = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedProjects = _.take(_.rest(this.projects, startIndex), this.pageSize);
  }

}
