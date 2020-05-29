import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first';
  url = 'http://localhost:3000/detail';
  constructor(private http: HttpClient) {
    //it shows the data present in the file
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
    });
  }
  //for deleting data from
}
