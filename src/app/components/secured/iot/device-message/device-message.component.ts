import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { IotService } from 'src/app/services/iot.service';

@Component({
  selector: 'app-device-message',
  templateUrl: './device-message.component.html',
  styleUrls: ['./device-message.component.css']
})
export class DeviceMessageComponent implements OnInit {
  deviceMessages: any;
  deviceMessage;
  pagedDeviceMessages = [];
  pageSize = 10;
  deviceMessagesLoading;
  p: number = 1;

  constructor(private _iotService: IotService) { }

  ngOnInit() {
    this.getDeviceMessages();
  }

  getDeviceMessages() {
    this.deviceMessagesLoading = true
    this._iotService.getAllDeviceMessages().subscribe(data => {
      this.deviceMessages = data;
      this.pagedDeviceMessages = _.take(this.deviceMessages, this, this.pageSize);
    },
      null,
      () => { this.deviceMessagesLoading = false; });
  }

  select(deviceMessage) {
    this.deviceMessage = deviceMessage;
    this._iotService.getDeviceMessage(deviceMessage.deviceMessageId).subscribe(data => this.deviceMessage = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedDeviceMessages = _.take(_.rest(this.deviceMessages, startIndex), this.pageSize);
  }
}
