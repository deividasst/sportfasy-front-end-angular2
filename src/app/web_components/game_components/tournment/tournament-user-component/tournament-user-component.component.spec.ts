import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentUserComponentComponent } from './tournament-user-component.component';

describe('TournamentUserComponentComponent', () => {
  let component: TournamentUserComponentComponent;
  let fixture: ComponentFixture<TournamentUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
