import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGroupsComponent } from './local-groups.component';

describe('LocalGroupsComponent', () => {
  let component: LocalGroupsComponent;
  let fixture: ComponentFixture<LocalGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalGroupsComponent]
    });
    fixture = TestBed.createComponent(LocalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
