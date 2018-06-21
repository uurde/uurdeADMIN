import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProjectService } from 'src/app/services/project.service';
import { ProjectModel } from '../../../../models/project.model';
import { FormGroup, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  title: string;
  project = new ProjectModel();
  projectForm: FormGroup;
  path;
  projectTypes: any;

  constructor(private _router: Router, private _route: ActivatedRoute, private _projectService: ProjectService) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var id = +params["id"];
      this.title = id ? "Edit Project" : "New Project";
      if (!id)
        return;
      this._projectService.getProject(id).subscribe(
        data => {
          this.project = data as any;
        },
        response => {
          if (response.status == 404) {
            this._router.navigate(['project']);
          }
        }
      );
    });
    this.getProjectTypes();
  }  

  selectchange(args){ 
    this.project.projectTypeId = args.target.selectedIndex; 
  } 

  save() {
    var result;
    if (this.project.projectId == null)
      result = this._projectService.insertProject(this.project);
    else
      result = this._projectService.updateProject(this.project);

    result.subscribe(x => { this._router.navigate(['project']); });
  }

  cancel() {
    this._router.navigate(['project']);
  }  

  getProjectTypes() {
    this._projectService.getProjectTypes().subscribe(data => {
      this.projectTypes = data;
    },
      null);
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        let path = reader.result;
        this.project.projectImagePath = path;
      }
    }
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no'
  };
}
