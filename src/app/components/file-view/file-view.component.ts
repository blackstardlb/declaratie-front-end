import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {

  file: File;

  @Input() set image(selectedImage) { this.file = selectedImage; }

  url: any;

  constructor(private sanitizer: DomSanitizer) {
    this.previewImage();
  }

  previewImage() {
    console.log(this.file.name);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.file));
  }

  ngOnInit() {
  }

}
