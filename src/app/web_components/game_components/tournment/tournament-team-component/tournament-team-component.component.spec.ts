import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTeamComponentComponent } from './tournament-team-component.component';

describe('TournamentTeamComponentComponent', () => {
  let component: TournamentTeamComponentComponent;
  let fixture: ComponentFixture<TournamentTeamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTeamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
