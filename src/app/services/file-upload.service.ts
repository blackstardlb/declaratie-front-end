import {Injectable} from '@angular/core';
import {Guid} from 'guid-typescript';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor() {
  }

  public uploadFiles(files: File[]): Promise<string[]> {
    const task = files.map(async file => {
      const filename = Guid.create().toString() + file.name.substr(file.name.lastIndexOf('.') - 1);
      const ref = firebase.storage().ref().child(filename);
      await ref.put(file);
      return ref.getDownloadURL();
    });

    return Promise.all(task);
  }
}
