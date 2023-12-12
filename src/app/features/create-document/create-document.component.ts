import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from 'app/services/documents/document.service';
import { SharedService } from 'app/services/shared/shared.service';
import { UserManagementService } from 'app/services/user-management/user-management.service';
import { INotification } from 'app/shared/notification/notification.component';
import { NotificationService } from 'app/shared/notification/notification.service';
import { filter, map } from 'rxjs';

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
    fileName_: new FormControl('', [Validators.required]),
    fileName: new FormControl('', [Validators.required]),
    approvalStatus: new FormControl('Pending'),
    authorUserId: new FormControl(''),
    authorName: new FormControl(''),
    lastModifiedUserId: new FormControl(''),
    lastModifiedUserName: new FormControl(''),
    lastAccessedUserName: new FormControl(''),
    lastAccessedUserId: new FormControl('')
  })
  docCreated: boolean = false;
  file: File;
  formData =  new FormData();
  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef, private userMgmtService: UserManagementService, private router: Router, private documentService: DocumentService, private notificationService: NotificationService) {
    this.sharedService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.userMgmtService
      .readUsers()
      .pipe(map((e) => 
        {
          let resp = e.filter(
            (f) => f.userId == localStorage.getItem("userId")
          )[0];
          debugger;
          console.log(resp)
          return resp;
        })
      )
      .subscribe((e) => {
        if(e){
          this.createDocumentForm.controls.authorUserId.setValue(e.userId);
          this.createDocumentForm.controls.authorName.setValue(e.userName)
          this.createDocumentForm.controls.lastAccessedUserId.setValue(e.userId);
          this.createDocumentForm.controls.lastAccessedUserName.setValue(e.userName)
        }
      });
  }

  createDocument() {
    let payload = {...this.createDocumentForm.value};
    delete payload.fileName_;
    this.documentService.uploadDocument(this.formData).subscribe(e => {
      if(e.toUpperCase() == 'SUCCESS'){
        this.documentService.createDocument(this.createDocumentForm.value).subscribe(e => {
          if (e.toUpperCase() == 'SUCCESS') {
            let notification: INotification = {
              type: 'success', message: 'Document created successfully!'
            }
            this.notificationService.notification(notification)
            this.router.navigate(['/document-management'])
          }
        })
      }else{
        let notification: INotification = {
          type: 'error', message: 'Document create failed!'
        }
        this.notificationService.notification(notification)
      }
    })
    
  }
  ngAfterViewInit(){
    this.cdr.detectChanges()
  }

  onChangeFile(event) {
    let selectedFiles = event.target.files;
    let currentFileUpload = selectedFiles.item(0);
    this.formData.append('File', currentFileUpload);
    this.createDocumentForm.controls.fileName.setValue(currentFileUpload.name)
  }

}
