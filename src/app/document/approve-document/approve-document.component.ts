import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { DocumentService } from 'app/services/documents/document.service';

declare var $: any;
@Component({
  selector: 'app-approve-document',
  templateUrl: './approve-document.component.html',
  styleUrls: ['./approve-document.component.css']
})
export class ApproveDocumentComponent implements OnInit {
  title = 'Approve Documents';
  isSelected: boolean = false;
  constructor(private sharedService: SharedService,private documentService: DocumentService) { 
    this.sharedService.setTitle(this.title);
  }
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.documentService.readDocument().subscribe(
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
