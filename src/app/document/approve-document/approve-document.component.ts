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
  constructor(private sharedService: SharedService,private documentService: DocumentService) { 
    this.sharedService.setTitle(this.title);
  }
  tableData: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.documentService.getDocument().subscribe(
      (data: any[]) => {
        this.tableData = data; 
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
