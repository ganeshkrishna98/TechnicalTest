import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { UserManagementService } from 'app/services/user-management/user-management.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'User Profile';
  constructor(private sharedService: SharedService, private userManagementService: UserManagementService) { 
    this.sharedService.setTitle(this.title);
  }
  tableData: any;
  ngOnInit() {
    this.fetchData();
  }
 userId:string = localStorage.token;
 fetchData() {
  this.userManagementService.readUsers().subscribe(
    (data: any[]) => {
      if(data.some(x=>x.userId === this.userId))
        this.tableData = data; 
    },
    error => {
      console.error('Error fetching data:', error);
    }
  );
}
}
