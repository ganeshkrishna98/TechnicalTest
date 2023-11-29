import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrls: ['./delete-document.component.css']
})
export class DeleteDocumentComponent implements OnInit {
  title = 'Delete Documents';
  constructor(private sharedService: SharedService) { 
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
