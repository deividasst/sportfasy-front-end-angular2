import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTournmentComponent } from './join-tournment.component';

describe('JoinTournmentComponent', () => {
  let component: JoinTournmentComponent;
  let fixture: ComponentFixture<JoinTournmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTournmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTournmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
