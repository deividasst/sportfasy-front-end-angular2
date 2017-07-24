import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournmentComponent } from './list-tournment.component';

describe('JoinTournmentComponent', () => {
  let component: ListTournmentComponent;
  let fixture: ComponentFixture<ListTournmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTournmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTournmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
