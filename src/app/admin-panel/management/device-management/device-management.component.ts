import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { DeviceManagementService } from 'app/services/device-management/device-management.service';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {
  title = 'Device Management';
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
