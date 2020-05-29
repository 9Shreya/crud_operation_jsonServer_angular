import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatWithNWithoutRfreshingComponent } from './creat-with-nwithout-rfreshing.component';

describe('CreatWithNWithoutRfreshingComponent', () => {
  let component: CreatWithNWithoutRfreshingComponent;
  let fixture: ComponentFixture<CreatWithNWithoutRfreshingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatWithNWithoutRfreshingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatWithNWithoutRfreshingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
