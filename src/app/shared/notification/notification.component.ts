import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

export interface INotification{
  type: string,
  message: string
}
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: INotification = {
    type: '',
    message: ''
  }
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notificationData$.subscribe((e: INotification) => {
      if(e.type){
        this.notification = {...e}
        setTimeout(() => {this.notification.message='', this.notification.type = ''}, 1000)
      }
    })
  }

}
