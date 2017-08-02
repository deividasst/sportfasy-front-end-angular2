import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTeamsComponent } from './grid-teams.component';

describe('GridTeamsComponent', () => {
  let component: GridTeamsComponent;
  let fixture: ComponentFixture<GridTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
