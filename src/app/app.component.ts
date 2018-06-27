import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pdfSrc: string = '../assets/Visual-Guidelines.pdf';

  fileObj = [
    {
      "fileName": "File-1",
      "fileType": ".docx"
    },
    {
      "fileName": "File-2",
      "fileType": ".xlsx"
    },
    {
      "fileName": "File-3",
      "fileType": ".pptx"
    },
    {
      "fileName": "File-4",
      "fileType": ".pdf"
    }
  ]

  domain = '';
  fileURL = '';
  url = '';

  onGoToPage2(item) {
    this.fileURL = 'http://127.0.0.1:4201/assets/' + item.fileName + item.fileType;
    this.url = 'https://docs.google.com/a/'+ this.domain +'/viewer?url=' + this.fileURL;
    console.log(this.url);
  }
}
