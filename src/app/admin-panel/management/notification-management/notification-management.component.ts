import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { NotificationManagementService } from 'app/services/notification-management/notification-management.service';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  title = 'Notification Management';
  constructor(private sharedService: SharedService, private notificationManagementService:NotificationManagementService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.notificationManagementService.readNotifications().subscribe(
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
