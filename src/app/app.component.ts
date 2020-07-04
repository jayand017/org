import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlTemplateUrl: any = '';

  constructor(private sanitizer: DomSanitizer, public http: HttpClient) {
    
  }

  getUrl() {
    this.htmlTemplateUrl = '/assets/org.html';
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.htmlTemplateUrl);
  }

}
