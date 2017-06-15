import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTournmentComponent } from './creat-tournment.component';

describe('CreatTournmentComponent', () => {
  let component: CreatTournmentComponent;
  let fixture: ComponentFixture<CreatTournmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatTournmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTournmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
