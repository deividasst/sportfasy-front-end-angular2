import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAllTeamsWidgetComponent } from './over-all-teams-widget.component';

describe('OverAllTeamsWidgetComponent', () => {
  let component: OverAllTeamsWidgetComponent;
  let fixture: ComponentFixture<OverAllTeamsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverAllTeamsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverAllTeamsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
