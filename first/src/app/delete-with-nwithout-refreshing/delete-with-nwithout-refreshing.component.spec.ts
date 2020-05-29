import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWithNwithoutRefreshingComponent } from './delete-with-nwithout-refreshing.component';

describe('DeleteWithNwithoutRefreshingComponent', () => {
  let component: DeleteWithNwithoutRefreshingComponent;
  let fixture: ComponentFixture<DeleteWithNwithoutRefreshingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWithNwithoutRefreshingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWithNwithoutRefreshingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
