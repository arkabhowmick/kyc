import { Component, OnInit, Input } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  @Input() file : Object;

  csvData;
  currentIndex = 1;
  dataModel = {};
  image = {};
  gotopage = 0;
  displayColumns = [];
  customMessage = '';

  constructor(private papa: Papa, private http: HttpClient) { }

  ngOnInit() {
    this.image = {
      image1 : '',
      image2 : '',
      image3 : '',
      image4 : ''
    };
    this.dataModel = this.file['data'];
    if(this.dataModel['displayColumns']) {
      this.displayColumns = this.dataModel['displayColumns'].split(',');
    }
    this.papa.parse(this.file['file'],{
      complete: (result) => {
        this.csvData = result.data;
        this.getImages();
      }
    });
  }

  next() {
    this.currentIndex = this.currentIndex+1;
    this.currentIndex = this.currentIndex >= this.csvData.length ? this.csvData.length - 1 : this.currentIndex;
    this.getImages();
    this.customMessage = '';
  }
  
  clearImages() {
    this.image['image1'] = '';
    this.image['image2'] = '';
    this.image['image3'] = '';
    this.image['image4'] = '';
  }
  
  previous() {
    this.currentIndex = this.currentIndex-1;
    this.currentIndex = this.currentIndex <= 1 ? 1 : this.currentIndex;
    this.getImages();
    this.customMessage = '';
  }

  goTo() {
    this.currentIndex = this.gotopage;
    this.getImages();
    this.customMessage = '';
  }

  pass() {
    this.csvData[this.currentIndex][parseInt(this.dataModel['status'])-1] = this.dataModel['pass'];
    this.customMessage = '';
  }

  fail() {
    this.csvData[this.currentIndex][parseInt(this.dataModel['status'])-1] = this.dataModel['fail'];
    this.customMessage = '';
  }

  updateStatus(value) {
    this.csvData[this.currentIndex][parseInt(this.dataModel['status'])-1] = value;
  }

  save() {
    let newArray = [];
    for(let index in this.csvData) {
      newArray.push('"' + this.csvData[index].join('","') + '"');
    }

    var a = document.createElement('a');
    var blob = new Blob([newArray.join('\n')], {type: 'text/csv' }),
    url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = "output.csv";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  async getImages() {
    this.clearImages();
    this.image['image1'] = await this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image1'])-1]);
    this.image['image2'] = await this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image2'])-1]);
    this.image['image3'] = await this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image3'])-1]);
    this.image['image4'] = await this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image4'])-1]);
    this.customMessage = '';
  }

  getImage(url) {
    return new Promise((resolve, reject) => {
      try {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
            resolve(reader.result);
          }
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }
      catch(err) {
        console.log('Error.');
        resolve('');
      }
    });
  }
}
