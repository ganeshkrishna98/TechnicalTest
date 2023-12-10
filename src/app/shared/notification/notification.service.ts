import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from './notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationData = new BehaviorSubject<any>('');
  notificationData$ = this.notificationData.asObservable();
  
  constructor() { }

  notification(data:INotification){
    let notification = {...data}
    notification.type = notification.type.toLowerCase()
    this.notificationData.next(notification);
  }
}
