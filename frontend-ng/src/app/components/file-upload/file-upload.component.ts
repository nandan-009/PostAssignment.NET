import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile: File | null = null;
 
  constructor(private http: HttpClient, private router: Router, private service:DataService) {}
 
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 

  uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }
 
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.uploadJson(formData).subscribe(
      response => {alert('File uploaded successfully:'),
        this.router.navigate(['/college'])},
        error => {console.error('File upload failed:', error),
          alert("failed to upload")}
    )
  }
}
