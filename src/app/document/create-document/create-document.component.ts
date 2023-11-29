import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  title = 'Create Documents';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
