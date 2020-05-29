import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child1st',
  templateUrl: './child1st.component.html',
  styleUrls: ['./child1st.component.css'],
})
export class Child1stComponent implements OnInit {
  title = 'child1st';
  url = 'http://localhost:3000/detail';
  data;

  constructor(private http: HttpClient) {                  //it shows the data present in the file
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  //for deleting data from server

  ngOnInit(): void {}
}
