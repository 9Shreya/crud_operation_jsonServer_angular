import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatWithourefreshComponent } from './creat-withourefresh.component';

describe('CreatWithourefreshComponent', () => {
  let component: CreatWithourefreshComponent;
  let fixture: ComponentFixture<CreatWithourefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatWithourefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatWithourefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
