import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
declare var $: any;
@Component({
  selector: 'app-approve-document',
  templateUrl: './approve-document.component.html',
  styleUrls: ['./approve-document.component.css']
})
export class ApproveDocumentComponent implements OnInit {
  title = 'Approve Documents';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
