import { environment } from "environments/environment";


export class API_URLS {
    public static READ_DOC: string =  `${environment.apiUrl}/api/document/read-documents`;
    public static CREATE_DOC: string =  `${environment.apiUrl}/api/document/create-documents`;
    public static UPDATE_DOC: string =  `${environment.apiUrl}/api/document/update-documents`;
    public static DELETE_DOC: string =  `${environment.apiUrl}/api/document/delete-documents`;
    public static UPLOAD_DOC: string =  `${environment.apiUrl}/api/document/upload-documents`;
    public static DOWNLOAD_DOC = (fileName: string): string =>  `${environment.apiUrl}/api/document/download-documents?fileName=${fileName}`;
    
    public static READ_LOGS: string = `${environment.apiUrl}/api/access-logs/read-access-logs`; 
    public static CREATE_LOGS: string = `${environment.apiUrl}/api/access-logs/create-access-logs`;
    public static UPDATE_LOGS: string = `${environment.apiUrl}/api/access-logs/update-access-logs`;
    public static DELETE_LOGS: string = `${environment.apiUrl}/api/access-logs/delete-access-logs`;
    
    public static READ_DEVICES: string = `${environment.apiUrl}/api/device-management/read-devices`;
    public static CREATE_DEVICES: string = `${environment.apiUrl}/api/device-management/create-devices`;
    public static UPDATE_DEVICES: string = `${environment.apiUrl}/api/device-management/update-devices`;
    public static DELETE_DEVICES: string = `${environment.apiUrl}/api/device-management/delete-devices`;
    
    public static READ_NOTIFICATIONS: string = `${environment.apiUrl}/api/notification-management/read-notifications`;
    public static CREATE_NOTIFICATIONS: string = `${environment.apiUrl}/api/notification-management/create-notifications`;
    public static UPDATE_NOTIFICATIONS: string = `${environment.apiUrl}/api/notification-management/update-notifications`;
    public static DELETE_NOTIFICATIONS: string = `${environment.apiUrl}/api/notification-management/delete-notifications`;
    
    public static READ_STORAGES: string = `${environment.apiUrl}/api/storage-management/read-storages`;
    public static CREATE_STORAGES: string = `${environment.apiUrl}/api/storage-management/create-storages`;
    public static UPDATE_STORAGES: string = `${environment.apiUrl}/api/storage-management/update-storages`;
    public static DELETE_STORAGES: string = `${environment.apiUrl}/api/storage-management/delete-storages`;
    
    public static READ_USERS: string = `${environment.apiUrl}/api/user-management/read-users`;
    public static CREATE_USERS: string = `${environment.apiUrl}/api/user-management/create-users`;
    public static UPDATE_USERS: string = `${environment.apiUrl}/api/user-management/update-users`;
    public static DELETE_USERS: string = `${environment.apiUrl}/api/user-management/delete-users`;
}