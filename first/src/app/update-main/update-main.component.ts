import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-main',
  templateUrl: './update-main.component.html',
  styleUrls: ['./update-main.component.css'],
})
export class UpdateMainComponent implements OnInit {
  nam3;
  phone3;
  email3;
  id;
  data;
  index;
  url = 'http://localhost:3000/detail';
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
    });
  }

  onDelete(obj) {
    this.http.delete(this.url + '/' + obj.id).subscribe((res) => {
      this.index = this.data.indexOf(obj);
      this.data.splice(this.index, 1);
    });
  }

  onCreat(obj) {
    this.http.post(this.url, obj.value).subscribe((res) => {
      this.data.push(obj.value);
      obj.reset();
    });
  }

  onUpdate(obj) {
    this.nam3 = obj.name;
    this.phone3 = obj.phone;
    this.id = obj.id;
    this.email3 = obj.email;
    this.index = this.data.indexOf(obj);
  }

  onModify(obj) {
    this.http.put(this.url + '/' + this.id, obj.value).subscribe((res) => {
      this.data[this.index] = obj.value;
    });
  }
  ngOnInit(): void {}
}
