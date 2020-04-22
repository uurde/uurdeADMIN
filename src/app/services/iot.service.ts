import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HeaderConfig } from 'src/app/services/header.config';
import { DeviceModel } from '../models/device.model';
import { DeviceMessageModel } from '../models/device-message.model';

@Injectable()
export class IotService {
    headerConfig = new HeaderConfig();

    deviceMessage: DeviceMessageModel;
    deviceMessages: DeviceMessageModel[];

    private _url = this.headerConfig.url + "/api/iotDeviceMessages";

    constructor(private _http: HttpClient) {

    }

    getAllDeviceMessages(){
        return this._http.get(this._url, this.headerConfig.httpOptions).pipe(tap(res => {return res;}));
    }

    getDeviceMessage(deviceMessageId) {
        return this._http.get(this._url + "/" + deviceMessageId, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    // insertVinyl(vinyl) {
    //     return this._http.post(this._url, vinyl, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    // }

    // updateVinyl(vinyl) {
    //     return this._http.put(this._url, vinyl, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    // }

    // deleteVinyl(vinylId) {
    //     return this._http.delete(this._url + "/" + vinylId, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    // }

    // getVinylTypes() {
    //     return this._http.get(this._url + "/GetVinylTypes", this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    // }
}