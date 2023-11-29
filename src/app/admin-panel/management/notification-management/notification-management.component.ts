import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  title = 'Notification Management';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
