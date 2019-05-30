import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonOverviewComponent } from './person-overview.component';

describe('PersonOverviewComponent', () => {
  let component: PersonOverviewComponent;
  let fixture: ComponentFixture<PersonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
