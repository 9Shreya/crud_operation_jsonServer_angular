import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-with-refresh',
  templateUrl: './update-with-refresh.component.html',
  styleUrls: ['./update-with-refresh.component.css'],
})
export class UpdateWithRefreshComponent implements OnInit {
  hurl = 'http://localhost:3000/detail';
  data;
  name1;
  email1;
  phone1;
  index;
  id;
  constructor(private http: HttpClient) {
    this.http.get(this.hurl).subscribe((res) => {
      this.data = res;
    });
  }

  onDelete(del) {
    this.http.delete(this.hurl + '/' + del.id).subscribe((res) => {
      let deletee = this.data.indexOf(del);
      this.data.splice(deletee, 1);
      console.log(deletee);

      console.log(this.data);
    });
  }

  onCreate(obj) {
    this.http.post(this.hurl, obj.value).subscribe((res) => {
      this.data.push(obj.value);
      obj.reset();
    });
  }

  onUpdate(obj) {
    this.name1 = obj.name;
    this.email1 = obj.email;
    this.phone1 = obj.phone;
    this.id = obj.id;
    this.index = this.data.indexOf(obj);
  }

  onModfiy(obj) {
    this.http.put(this.hurl + '/' + this.id, obj.value).subscribe();
  }

  ngOnInit(): void {}
}
