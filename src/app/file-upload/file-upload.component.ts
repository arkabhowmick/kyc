import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() onProceed : EventEmitter<Object> = new EventEmitter<Object>();

  file : String;
  filename : String;
  dataModel : Object;

  constructor() { 
    this.file = null;

  }

  ngOnInit() {
    this.dataModel = {
      image1 : 1,
      image2 : 2,
      image3 : 3,
      image4 : 4,
      status : 5,
      displayColumns : '',
      pass : 1,
      fail : 0
    };
  }

  uploadFile(file) {
    this.filename = file[0].name;

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.file = fileReader.result.toString();
    }
    fileReader.readAsText(file[0]);
  }

  proceed() {
    this.onProceed.emit({file : this.file, data : this.dataModel});
  }

  removeFile() {
    this.file = null;
    this.filename = '';
  }

}
