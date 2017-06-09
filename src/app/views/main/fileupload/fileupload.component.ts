import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AppServices } from '../../../shared/services';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-main-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: [ './fileupload.component.css'],
  providers: [ AppServices ]
})
export class FileUploadComponent {

  urls: any;
  pageTitle: any = 'File Upload';

  public uploader: FileUploader = new FileUploader({url: environment.uploadApi});
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(public router: Router, private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

}
