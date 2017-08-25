import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUserProfileComponent } from './grid-user-profile.component';

describe('GridUserProfileComponent', () => {
  let component: GridUserProfileComponent;
  let fixture: ComponentFixture<GridUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
