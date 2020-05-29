import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-with-nwithout-refreshing',
  templateUrl: './delete-with-nwithout-refreshing.component.html',
  styleUrls: ['./delete-with-nwithout-refreshing.component.css'],
})
export class DeleteWithNwithoutRefreshingComponent implements OnInit {
  humaraURL = 'http://localhost:3000/detail';
  data;
  public fectchvalue = ' ';

  constructor(public good: HttpClient) {
    this.good.get(this.humaraURL).subscribe((grow) => {
      this.data = grow;
    });
  }

  // for deleting elements

  onRefDelete(ele) {
    this.good.delete(this.humaraURL + '/' + ele.id).subscribe();
    console.log(ele.id + ' ' + ele.name);
  }

  withoutRefDelet(dis) {
    this.good.delete(this.humaraURL + '/' + dis.id).subscribe(() => {
      let index = this.data.indexOf(dis);
      this.data.splice(index, 1);
      console.log(this.data);
    });
  }

  inputDel(obj) {
    console.log(obj);
    this.good.delete(this.humaraURL + '/' + parseInt(obj)).subscribe(() => {
      this.data.splice(obj, 1);
      console.log(this.data);
    });
  }

  ngOnInit(): void {}
}
