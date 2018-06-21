import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ResumeService } from 'src/app/services/resume.service';
import { ResumeModel } from '../../../../models/resume.model';
import { FormGroup, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  title: string;
  resume = new ResumeModel();
  resumeForm: FormGroup;
  path;

  constructor(private _router: Router, private _route: ActivatedRoute, private _resumeService: ResumeService) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var id = +params["id"];
      console.log(id);
      this.title = id ? "Edit Resume" : "New Resume";
      if (!id)
        return;
      this._resumeService.getResume(id).subscribe(
        data => {
          this.resume = data as any;
        },
        response => {
          if (response.status == 404) {
            this._router.navigate(['resume']);
          }
        }
      );
    });
  }

  save() {
    var result;
    if (this.resume.resumeId == null)
      result = this._resumeService.insertResume(this.resume);
    else
      result = this._resumeService.updateResume(this.resume);

    result.subscribe(x => { this._router.navigate(['resume']); });
  }

  cancel() {
    this._router.navigate(['resume']);
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