import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { STTService } from './services/stt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberI18nSample = 123450.9876;
  constructor(private sttService: STTService) { }

  @ViewChild('audioplayer') audioplayer;

  title = 'ng-pluggables demo application';

  processAudioBlob(blob: Blob) {
    var audioURL = window.URL.createObjectURL(blob);
    this.audioplayer.nativeElement.src = audioURL;
    // this blob will be sent to speech recognition API to process further
    this.sttService.recognize(blob).subscribe(response => {
      console.log(response);
    });
  }
}
