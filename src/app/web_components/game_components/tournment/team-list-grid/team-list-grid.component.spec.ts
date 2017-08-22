import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListGridComponent } from './team-list-grid.component';

describe('TeamListGridComponent', () => {
  let component: TeamListGridComponent;
  let fixture: ComponentFixture<TeamListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
