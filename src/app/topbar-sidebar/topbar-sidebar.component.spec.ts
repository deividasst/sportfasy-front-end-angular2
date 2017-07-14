import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSidebarComponent } from './topbar-sidebar.component';

describe('TopbarSidebarComponent', () => {
  let component: TopbarSidebarComponent;
  let fixture: ComponentFixture<TopbarSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
