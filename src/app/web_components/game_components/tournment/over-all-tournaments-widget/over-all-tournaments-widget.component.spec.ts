import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAllTournamentsWidgetComponent } from './over-all-tournaments-widget.component';

describe('OverAllTournamentsWidgetComponent', () => {
  let component: OverAllTournamentsWidgetComponent;
  let fixture: ComponentFixture<OverAllTournamentsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverAllTournamentsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverAllTournamentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
