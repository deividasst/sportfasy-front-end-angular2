import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTournamentsComponent } from './grid-tournaments.component';

describe('GridTournamentsComponent', () => {
  let component: GridTournamentsComponent;
  let fixture: ComponentFixture<GridTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
