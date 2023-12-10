import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from 'app/services/documents/document.service';
import { SharedService } from 'app/services/shared/shared.service';
import { INotification } from 'app/shared/notification/notification.component';
import { NotificationService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  title = 'Document Management';
  createDocumentForm = new FormGroup({
    documentId: new FormControl(''),
    documentName: new FormControl('', [Validators.required]),
    fileName: new FormControl('', [Validators.required]),
    approvalStatus: new FormControl('', [Validators.required]),
    authorUserId: new FormControl('', [Validators.required]),
    authorName: new FormControl('', [Validators.required]),
    lastModifiedUserId: new FormControl('', [Validators.required]),
    lastModifiedUserName: new FormControl('', [Validators.required]),
    lastAccessedUserName: new FormControl('', [Validators.required]),
    lastAccessedUserId: new FormControl('', [Validators.required])
  })
  docCreated: boolean = false;
  constructor(private sharedService: SharedService, private documentService: DocumentService, private notificationService: NotificationService) {
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

  createDocument() {
    this.documentService.createDocument(this.createDocumentForm.value).subscribe(e => {
      console.log(e); debugger;
      if (e.toUpperCase() == 'SUCCESS') {
        let notification: INotification = {
          type: 'success', message: 'Document created successfully!'
        }
        this.notificationService.notification(notification)
      }
    })
  }

}
