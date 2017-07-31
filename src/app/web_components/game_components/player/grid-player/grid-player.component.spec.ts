import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPlayerComponent } from './grid-player.component';

describe('GridPlayerComponent', () => {
  let component: GridPlayerComponent;
  let fixture: ComponentFixture<GridPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
