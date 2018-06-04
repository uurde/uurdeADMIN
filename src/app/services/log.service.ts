import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { LogModel } from 'src/app/models/log.model';
import { HeaderConfig } from 'src/app/services/header.config';

@Injectable()
export class LogService {
    headerConfig = new HeaderConfig();

    private _url = this.headerConfig.url + "/api/logs";

    constructor(private _http: HttpClient) {

    }

    getAllContact(log: LogModel) {
        this._http.get(this._url, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}