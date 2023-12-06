import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared/shared.service';
import { DocumentService } from 'app/services/documents/document.service';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { HTTP_RESPONSE } from 'app/utils/constants/app.contants';

declare var $: any;
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  title = 'Approve Documents';
  documentForm = new FormGroup({
    documentId: new FormControl(''),
    documentName: new FormControl(''),
    fileName: new FormControl(''),
    approvalStatus: new FormControl(''),
    authorUserId: new FormControl(''),
    authorName: new FormControl(''),
    lastModifiedUserId: new FormControl(''),
    lastModifiedUserName: new FormControl(''),
    lastAccessedUserName: new FormControl(''),
    lastAccessedUserId: new FormControl('')
  });
  isSelected: boolean = false;
  selectedAction = 'APPROVE';
  constructor(private sharedService: SharedService,private documentService: DocumentService, private cdr: ChangeDetectorRef) { 
    this.sharedService.setTitle(this.title);
  }
  tableData: any[] = [];
  selectedItem: any;
  ngOnInit(): void {
    this.fetchData();
  }
  ngAfterViewInit(){
    this.cdr.detectChanges()
  }
  fetchData() {
    this.isSelected = false;
    this.selectedItem = {};
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
  create(){
    // let payload = {
    //   documentId: '',
    //   documentName: '',
    //   fileName: '',
    //   approvalStatus: '',
    //   authorUserId: '',
    //   authorName: '',
    //   lastModifiedUserId: '',
    //   lastModifiedUserName: '',
    //   lastAccessedUserName: '',
    //   lastAccessedUserId:''
    // } = {...this.documentForm.value};
       this.documentService.createDocument(this.documentForm);
       
  }
  updateDocument(){
    Object.keys(this.selectedItem).forEach(e => {
      this.documentForm.get(`${e}`).setValue(this.selectedItem[e]);
      // this.documentForm.updateValueAndValidity();
      });
    this.selectedAction = 'UPDATE'
  }
  updateDetails(){
    this.documentService.updateDocument(this.documentForm.value)
    .subscribe(e => {
      if(e.toUpperCase() == HTTP_RESPONSE.SUCCESS){
        this.fetchData();
      }
    })
  }
  deleteDocument(){
    const payload = { documentId: this.selectedItem.documentId}
    this.documentService.deleteDocument(payload).subscribe(e => {
      // if(e){
        debugger;
      // }
    });
  }
}
