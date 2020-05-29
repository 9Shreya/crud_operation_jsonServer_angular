import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1stComponent } from './child1st.component';

describe('Child1stComponent', () => {
  let component: Child1stComponent;
  let fixture: ComponentFixture<Child1stComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1stComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1stComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
