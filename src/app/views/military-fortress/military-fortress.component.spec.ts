import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryFortressComponent } from './military-fortress.component';

describe('MilitaryFortressComponent', () => {
  let component: MilitaryFortressComponent;
  let fixture: ComponentFixture<MilitaryFortressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryFortressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryFortressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
