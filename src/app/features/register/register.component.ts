import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/services/authentication/authentication.service";
import { INotification } from "app/shared/notification/notification.component";
import { NotificationService } from "app/shared/notification/notification.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    userAccounts: new FormGroup({
      userId: new FormControl(""),
      userEmail: new FormControl(""),
      userName: new FormControl("", [Validators.required]),
      lastAccessTime: new FormControl(new Date()),
      lastAccessDevice: new FormControl(window['userAgent']),
      lastAccessIp: new FormControl("192.168.1.1"),
      accountType: new FormControl("Standard"),
    }),
  });

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient, private notificationService: NotificationService, private router: Router
  ) 
  {}

  ngOnInit(): void {
    
  }
  resetForm(){
    this.registerForm.reset()
  }

  onCreate(){
    let notification:INotification = {
      type: "",
      message: ""
    }
    this.registerForm.controls.userAccounts.get('userEmail').setValue(this.registerForm.controls.email.value)
    this.authService.register(this.registerForm.value).subscribe(e => {
      debugger;
      if(e){
        notification.type = "success"
        notification.message = "User registration successfull!";
        this.notificationService.notification(notification);
        this.router.navigate(['login'])
      }
    }, error => {
      debugger;
      notification.type = "danger",
      notification.message = error.text || error.error
      this.notificationService.notification(notification)
    })
  }
}
