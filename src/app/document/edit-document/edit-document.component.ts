import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  title = 'Edit Documents';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
