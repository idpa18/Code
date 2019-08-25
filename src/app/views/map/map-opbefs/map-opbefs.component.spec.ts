import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOpbefsComponent } from './map-opbefs.component';

describe('MapOpbefsComponent', () => {
  let component: MapOpbefsComponent;
  let fixture: ComponentFixture<MapOpbefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOpbefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOpbefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
