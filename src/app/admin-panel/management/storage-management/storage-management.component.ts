import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.css']
})
export class StorageManagementComponent implements OnInit {
  title = 'Storage Management';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
