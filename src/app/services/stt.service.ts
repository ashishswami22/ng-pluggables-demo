import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class STTService {
    constructor(private http: HttpClient) {}
    
    recognize(blob: Blob) {
        const file = new File([blob], 'recording.wav', {type: 'audio/wav', lastModified: Date.now()});
        const formData: FormData = new FormData();
        formData.append('uploadedFile', file);
        return this.http.post('http://localhost:8080/recognize', formData);
    }
}
