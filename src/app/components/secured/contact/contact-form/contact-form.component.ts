import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';
import { ContactModel } from '../../../../models/contact.model';
import { FormGroup, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  title: string;
  contact = new ContactModel();
  contactForm: FormGroup;
  path;
  contactTypes: any;

  constructor(private _router: Router, private _route: ActivatedRoute, private _contactService: ContactService) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var id = +params["id"];
      this.title = id ? "Reply Contact" : "New Contact";
      if (!id)
        return;
      this._contactService.getContact(id).subscribe(
        data => {
          this.contact = data as any;
        },
        response => {
          if (response.status == 404) {
            this._router.navigate(['contact']);
          }
        }
      );
    });
  }

  save() {
    var result = this._contactService.sendMail(this.contact);
    result.subscribe(x => { this._router.navigate(['contact']); });
  }

  cancel() {
    this._router.navigate(['contact']);
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
