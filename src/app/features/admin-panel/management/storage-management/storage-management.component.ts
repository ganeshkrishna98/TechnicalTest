import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { StorageManagementService } from 'app/services/storage-management/storage-management.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private sharedService: SharedService, private storageManagementService: StorageManagementService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
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

}
