import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/services/shared/shared.service';
import { UserManagementService } from 'app/services/user-management/user-management.service';
import { INotification } from 'app/shared/notification/notification.component';
import { NotificationService } from 'app/shared/notification/notification.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'User Profile';
  userProfileForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    accountType: new FormControl('', [Validators.required]),
    lastAccessTime: new FormControl(''),
    lastAccessDevice: new FormControl(''),
    lastAccessIp: new FormControl('')
  });
  constructor(private sharedService: SharedService, private userManagementService: UserManagementService, private cdr: ChangeDetectorRef, private notificationService: NotificationService) {
    this.sharedService.setTitle(this.title);
  }
  tableData: any;
  ngOnInit() {
    this.fetchData();
  }
  userId: string = localStorage.token;
  fetchData() {
    this.userManagementService.readUsers()
    // .pipe(filter(e =>  e[0].userId == this.userId ? e[0] : null))
    .subscribe(
      (data) => {
        if (data.length > 0){
          this.userProfileForm.controls.userId.setValue(data[0]['userId']);
          this.userProfileForm.controls.userEmail.setValue(data[0]['userEmail']);
          this.userProfileForm.controls.userName.setValue(data[0]['userName']);
          this.userProfileForm.controls.lastAccessTime.setValue(data[0]['lastAccessTime']);
          this.userProfileForm.controls.lastAccessDevice.setValue(data[0]['lastAccessDevice']);
          this.userProfileForm.controls.lastAccessIp.setValue(data[0]['lastAccessIp']);
          this.userProfileForm.controls.accountType.setValue(data[0]['accountType']);
        }
        
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  updateProfile() {
    debugger;
    this.userManagementService.updateUsers(this.userProfileForm.value).subscribe(e => {
      if (e.toUpperCase() == 'SUCCESS') {
        let notification: INotification = {
          type: e.toLowerCase(),
          message: 'User profile updated!'
        };
        this.notificationService.notification(notification)
      }
    })
  }
  ngAfterViewInit() {
    this.cdr.detectChanges()
  }
}
