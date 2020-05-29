import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWithRefreshComponent } from './update-with-refresh.component';

describe('UpdateWithRefreshComponent', () => {
  let component: UpdateWithRefreshComponent;
  let fixture: ComponentFixture<UpdateWithRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWithRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWithRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
