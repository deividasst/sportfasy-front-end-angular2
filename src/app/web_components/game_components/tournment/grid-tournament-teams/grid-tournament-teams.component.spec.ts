import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTournamentTeamsComponent } from './grid-tournament-teams.component';

describe('GridTournamentTeamsComponent', () => {
  let component: GridTournamentTeamsComponent;
  let fixture: ComponentFixture<GridTournamentTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTournamentTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTournamentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
