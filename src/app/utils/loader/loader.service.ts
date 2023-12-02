import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private show: boolean = false;

  constructor() { }

  showLoader(){
    this.show = true;
  }

  hideLoader(){
    this.show = false
  }

  getLoaderValue(){
    return this.show
  }
}
