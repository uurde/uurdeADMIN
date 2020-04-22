import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { IotService } from 'src/app/services/iot.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  devices: any;
  device;
  pagedDevices = [];
  pageSize = 10;
  devicesLoading;
  p: number = 1;

  constructor(private _iotService: IotService) { }

  ngOnInit() {
  }

}
