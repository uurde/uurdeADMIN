import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMessageComponent } from './device-message.component';

describe('DeviceMessageComponent', () => {
  let component: DeviceMessageComponent;
  let fixture: ComponentFixture<DeviceMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
