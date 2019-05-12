import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadedFiles: File[] = [];
  acceptTypes = 'image/jpeg,image/jpg,image/png';

  constructor() { }

  openFileBrowser(event: any) {
    event.preventDefault();
    const element = document.getElementById('fileId') as HTMLElement;
    element.click();
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.procesSelectedFiles(event.target.files);
    }
  }

  private procesSelectedFiles(files: File[]) {
    for (const chosenFile of files) {
      console.log('Selected: ' + chosenFile.name);
      this.uploadedFiles.push(chosenFile);
    }
  }

  ngOnInit() {
  }

}
