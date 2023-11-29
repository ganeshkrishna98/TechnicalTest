import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },    
    { path: '/create-document', title: 'Create Document',  icon:'note_add', class: '' },
    { path: '/edit-document', title: 'Edit Document',  icon:'edit_document', class: '' },
    { path: '/delete-document', title: 'Delete Document',  icon:'delete', class: '' },
    { path: '/approve-document', title: 'Approve Document',  icon:'verified', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/admin-panel', title: 'Admin Panel',  icon:'admin_panel_settings', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
