import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
declare var $: any;
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  title = 'Admin Panel';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }
  
  ngOnInit(): void {
  }
  
}
