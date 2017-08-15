import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTeamPlayersComponent } from './grid-team-players.component';

describe('GridTeamPlayersComponent', () => {
  let component: GridTeamPlayersComponent;
  let fixture: ComponentFixture<GridTeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTeamPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
