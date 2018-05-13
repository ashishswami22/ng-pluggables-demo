import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('audioplayer') audioplayer;

  title = 'ng-pluggables demo application';

  processAudioBlob(blob: Blob) {
    var audioURL = window.URL.createObjectURL(blob);
    this.audioplayer.nativeElement.src = audioURL;
    // this blob can also be sent to speech recognition API to process further
  }
}
