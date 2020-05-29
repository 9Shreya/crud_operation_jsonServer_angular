import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creat-withourefresh',
  templateUrl: './creat-withourefresh.component.html',
  styleUrls: ['./creat-withourefresh.component.css'],
})
export class CreatWithourefreshComponent implements OnInit {
  ngOnInit(): void {}
  nam3: string;
  phno3: number;
  email3: string;
  data: any;
  hurl = 'http://localhost:3000/detail';
  constructor(private http: HttpClient) {
    this.http.get(this.hurl).subscribe((res) => {
      this.data = res;
    });
  }
  withoutRefresheCreate(hi) {
    let newhi = hi.value;
    this.http.post(this.hurl, hi.value).subscribe(() => {
      this.data.push(newhi);
      hi.reset();
    });
  }

  withoutRefDelet(dis) {
    this.http.delete(this.hurl + '/' + dis.id).subscribe(() => {
      let index = this.data.indexOf(dis);
      this.data.splice(index, 1);
      console.log(this.data);
    });
  }
}
