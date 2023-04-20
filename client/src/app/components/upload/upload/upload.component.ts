import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadService } from '../upload.service';

@Component({
  selector: 'trends-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  loader:boolean = false;
  uploadExcelObj: any = {};
  uploadExcel: any = {};
  loader2: boolean = true;
  excelObj: any = {};

  constructor(
    public snackBar: MatSnackBar,
    public uploadService: UploadService
  ) { }

  ngOnInit(): void {
  }

  
  fileUpload(event:any) {
    // const target: HTMLInputElement = event.target;
    const target: any = event.target;
    if (target.files.length === 0) {
      throw new Error('Not Uploaded');
    }
    if (target.files.length > 1) {
      throw new Error('cannot use multiple files');
    }
    this.excelObj = event.target.files.item(0);
    // console.log("sheet", this.excelObj);
    let fileType = this.excelObj;
    if (fileType && fileType.name) {
      fileType = fileType.name.toString().toLowerCase();
      fileType = fileType.split('.');
      const type = fileType;
      if (type && type.length > 0 &&
        (type[type.length - 1] === 'xlsx' ||
          type[type.length - 1] === 'xlsm' ||
          type[type.length - 1] === 'xls' ||
          type[type.length - 1] === 'xlts' ||
          type[type.length - 1] === 'xltm')) {
        this.uploadExcel.file = event.target.files.item(0);
        // console.log("newsheet", this.uploadExcel);

        this.loader2 = false;
      } else {
        // console.log('file format not supported');
        this.showErrorMessage(`Sorry, 
        '${event.target.files.item(0).name}' 
        is invalid, allowed extensions are: (.xlsx, .xlsm, .xls, xlts, xltm) files`, 'Got it!');
      }
    }
  }

  showErrorMessage(msg1:any, msg2:any) {
    this.snackBar.open(msg1, msg2, { duration: 6000 });
  }


  
  uploadExcelFile() {
    this.loader = true;
    this.uploadExcelObj.file = this.uploadExcel.file;
    // console.log("this.uploadExcelObj", this.uploadExcelObj);

    this.uploadService.getExcel(this.uploadExcelObj).subscribe(res => {
      if (res.statusCode == '001') {
        delete this.uploadExcel.file;
        delete this.uploadExcelObj.file;
        this.loader2 = true;
        this.loader = false;
        this.snackBar.open(res.Message, 'Got it!');
      } else {
        this.snackBar.open(res.Message, 'Got it!');
        this.loader = false;
      }
    })

  }

  clearFile() {
    delete this.uploadExcel.file;
    delete this.uploadExcelObj.file;
    this.loader2 = true;
  }

}
