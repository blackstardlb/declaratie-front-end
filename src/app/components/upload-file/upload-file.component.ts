import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() valueChange = new EventEmitter<File[]>();
  uploadedFiles: File[] = [];
  acceptTypes = 'image/jpeg,image/jpg,image/png';

  constructor() {
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    const element = document.getElementById('fileId') as HTMLElement;
    element.click();
  }

  onFileSelect(event: any) {
    // TEST
    if (event.target.files.length > 0) {
      this.procesSelectedFiles(event.target.files);
    }
  }

  private procesSelectedFiles(files: File[]) {
    for (const chosenFile of files) {
      console.log('Selected: ' + chosenFile.name);
      this.uploadedFiles.push(chosenFile);
      this.valueChange.emit(this.uploadedFiles);
    }
  }

  ngOnInit() {
  }

}
