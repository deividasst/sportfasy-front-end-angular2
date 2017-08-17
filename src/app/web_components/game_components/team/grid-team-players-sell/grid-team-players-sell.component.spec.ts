import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTeamPlayersSellComponent } from './grid-team-players-sell.component';

describe('GridTeamPlayersSellComponent', () => {
  let component: GridTeamPlayersSellComponent;
  let fixture: ComponentFixture<GridTeamPlayersSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTeamPlayersSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTeamPlayersSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
