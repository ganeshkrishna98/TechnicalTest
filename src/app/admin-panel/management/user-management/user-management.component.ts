import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { UserManagementService } from 'app/services/user-management/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  title = 'User Management';
  constructor(private sharedService: SharedService, private userManagementService: UserManagementService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
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
    console.log(data);
    this.isSelected = true;
    this.selectedItem = data
  }
}
