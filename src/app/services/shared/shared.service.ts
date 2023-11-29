import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private titleValue: string;

  setTitle(value: string): void {
    this.titleValue = value;
  }

  getTitle(): string {
    return this.titleValue;
  }
}
