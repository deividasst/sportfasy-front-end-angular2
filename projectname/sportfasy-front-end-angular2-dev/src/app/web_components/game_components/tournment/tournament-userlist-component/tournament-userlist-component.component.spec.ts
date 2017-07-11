import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentUserlistComponentComponent } from './tournament-userlist-component.component';

describe('TournamentUserlistComponentComponent', () => {
  let component: TournamentUserlistComponentComponent;
  let fixture: ComponentFixture<TournamentUserlistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentUserlistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentUserlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
