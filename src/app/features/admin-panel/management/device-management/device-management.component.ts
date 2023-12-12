import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { DeviceManagementService } from 'app/services/device-management/device-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HTTP_RESPONSE } from 'app/utils/constants/app.contants';
import { INotification } from 'app/shared/notification/notification.component';
import { NotificationService } from 'app/shared/notification/notification.service';

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
  selectedAction: string = 'VIEW';
  constructor(private sharedService: SharedService, private deviceManagementService: DeviceManagementService, private notificationService: NotificationService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.selectedAction = 'VIEW'
    this.isSelected = false;
    this.selectedItem = {};
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

  deleteItem(){
    this.deviceManagementService.deleteDevices(this.selectedItem).subscribe(e => {
      if(e){
        let notification: INotification = {
          type: HTTP_RESPONSE.SUCCESS, message: 'Storage deleted!'
        }
        this.notificationService.notification(notification)
        this.fetchData();
      }
    })
  }

  editItem(){
    Object.keys(this.selectedItem).forEach(e => {
      this.deviceForm.get(`${e}`).setValue(this.selectedItem[e]);
      });
    this.selectedAction = 'UPDATE'
  }

  editAction(){
    this.deviceManagementService.updateDevices(this.deviceForm.value).subscribe(e => {
      if(e.toUpperCase() == HTTP_RESPONSE.SUCCESS){
        let notification: INotification = {
          type: HTTP_RESPONSE.SUCCESS, message: 'Storage deleted!'
        }
        this.notificationService.notification(notification)
        this.fetchData();
      }
    })
  }
  backAction(){
    if(this.selectedAction == 'VIEW'){
      this.isSelected = false;
    }else{
      this.selectedAction = 'VIEW';
      this.deviceForm.reset()
    }
  }

  createDevice(){
    this.selectedAction = 'CREATE';
    this.isSelected = true;
  }

}
