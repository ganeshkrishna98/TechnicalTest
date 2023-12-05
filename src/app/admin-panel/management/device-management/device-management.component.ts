import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { DeviceManagementService } from 'app/services/device-management/device-management.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {
  title = 'Device Management';
  deviceForm = new FormGroup({
    deviceId: new FormControl(''),
    deviceName: new FormControl(''),
    deviceType: new FormControl(''),
    deviceOs: new FormControl(''),
    userId: new FormControl(''),
    userName: new FormControl(''),
    lastAccessedDate: new FormControl(''),
    lastAccessedTime: new FormControl('')
  });
  constructor(private sharedService: SharedService, private deviceManagementService: DeviceManagementService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.deviceManagementService.readDevices().subscribe(
      (data: any[]) => {
        this.tableData = data; 
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  getData(data){
    // table column -> checkbox + select all
    console.log(data);
    this.isSelected = true;
    this.selectedItem = data
  }

}
