import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kyc';
  file : Object = null;
  constructor() {

  }

  uploadFile(file) {
    this.file = file;
    // console.log('File : ', this.file);
  }

}
