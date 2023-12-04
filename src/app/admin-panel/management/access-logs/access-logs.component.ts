import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { AccessLogsService } from 'app/services/access-logs/access-logs.service';

@Component({
  selector: 'app-access-logs',
  templateUrl: './access-logs.component.html',
  styleUrls: ['./access-logs.component.css']
})
export class AccessLogsComponent implements OnInit {
  title = 'Access Logs';
  constructor(private sharedService: SharedService, private accessLogsService: AccessLogsService) { 
    this.sharedService.setTitle(this.title);
  }
  isSelected: boolean = false;
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.accessLogsService.readAccessLogs().subscribe(
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
