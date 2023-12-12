import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { UserManagementService } from 'app/services/user-management/user-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HTTP_RESPONSE } from 'app/utils/constants/app.contants';
import { INotification } from 'app/shared/notification/notification.component';
import { NotificationService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  title = 'User Management';
  userForm = new FormGroup({
    userId: new FormControl(''),
    userEmail: new FormControl(''),
    userName: new FormControl(''),
    lastAccessTime: new FormControl(''),
    lastAccessDevice: new FormControl(''),
    lastAccessIp: new FormControl(''),
    accountType: new FormControl('')
  });
  selectedAction: string = 'VIEW';
  constructor(private sharedService: SharedService, private userManagementService: UserManagementService, private cdr: ChangeDetectorRef, private notificationService: NotificationService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  accountTypes = ['Standard', 'Administrator']
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.selectedAction = 'VIEW'
    this.isSelected = false;
    this.selectedItem = {};
    this.userManagementService.readUsers().subscribe(
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
    this.isSelected = true;
    this.selectedItem = data
  }
  updateUser(){
    Object.keys(this.selectedItem).forEach(e => {
      this.userForm.get(`${e}`).setValue(this.selectedItem[e]);
      });
    this.selectedAction = 'UPDATE'
    console.log(this.userForm.value)
  }
  changeAccountType(e) {
    this.userForm.controls.accountType.setValue(e.target.value)
  }
  ngAfterViewInit(){
    this.cdr.detectChanges()
  }
  deleteItem(){
    this.userManagementService.deleteUsers(this.selectedItem).subscribe(e => {
      if(e){
        let notification: INotification = {
          type: HTTP_RESPONSE.SUCCESS, message: 'User deleted!'
        }
        this.notificationService.notification(notification)
        this.fetchData();
      }
    })
  }
  updateAction(){
    this.userManagementService.updateUsers(this.userForm.value).subscribe(e => {
      if(e.toUpperCase() == HTTP_RESPONSE.SUCCESS){
        let notification: INotification = {
          type: HTTP_RESPONSE.SUCCESS, message: 'User deleted!'
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
      this.userForm.reset()
    }
  }
}
