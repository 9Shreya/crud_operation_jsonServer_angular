import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creat-with-nwithout-rfreshing',
  templateUrl: './creat-with-nwithout-rfreshing.component.html',
  styleUrls: ['./creat-with-nwithout-rfreshing.component.css'],
})
export class CreatWithNWithoutRfreshingComponent implements OnInit {
  nam2: string;
  phno2: number;
  email2: string;

  data: any;
  hurl = 'http://localhost:3000/detail';
  constructor(private http: HttpClient) {
    this.http.get(this.hurl).subscribe((res) => {
      this.data = res;
    });
  }

  withoutRefDelet(dis) {
    this.http.delete(this.hurl + '/' + dis.id).subscribe((res) => {
      let index = this.data.indexOf(dis);
      this.data.splice(index, 1);
      console.log(this.data);
    });
  }

  onSubmit(full) {
    this.http.post(this.hurl, full.value).subscribe();
  }

  ngOnInit(): void {}
}
