import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFortressesComponent } from './map-fortresses.component';

describe('MapFortressesComponent', () => {
  let component: MapFortressesComponent;
  let fixture: ComponentFixture<MapFortressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFortressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFortressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
