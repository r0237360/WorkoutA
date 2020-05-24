import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutAComponent } from './work-out-a.component';

describe('WorkOutAComponent', () => {
  let component: WorkOutAComponent;
  let fixture: ComponentFixture<WorkOutAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOutAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOutAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
