import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { StorageManagementService } from 'app/services/storage-management/storage-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { INotification } from 'app/shared/notification/notification.component';
import { HTTP_RESPONSE } from 'app/utils/constants/app.contants';
import { NotificationService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.css']
})
export class StorageManagementComponent implements OnInit {
  title = 'Storage Management';
  storageForm = new FormGroup({
    storageId: new FormControl(''),
    storageName: new FormControl(''),
    createdDate: new FormControl(''),
    createdTime: new FormControl(''),
    createdUserId: new FormControl(''),
    createdUserName: new FormControl('')
  });
  selectedAction: string;
  constructor(private sharedService: SharedService, private storageManagementService: StorageManagementService, private notificationService: NotificationService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any = 'VIEW';
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.selectedAction = 'VIEW'
    this.isSelected = false;
    this.selectedItem = {};
    this.storageManagementService.readStorages().subscribe(
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
    this.storageManagementService.deleteStorages(this.selectedItem).subscribe(e => {
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
      this.storageForm.get(`${e}`).setValue(this.selectedItem[e]);
      });
    this.selectedAction = 'UPDATE'
  }

  editAction(){
    this.storageManagementService.updateStorages(this.storageForm.value).subscribe(e => {
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
      this.storageForm.reset()
    }
  }

}
