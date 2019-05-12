import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {

  @Input()
  file: File;
  url: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  previewImage() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.file));
  }

  ngOnInit() {
    this.previewImage();
  }
}
