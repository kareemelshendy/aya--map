import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesAutocompeleteComponent } from './places-autocompelete.component';

describe('PlacesAutocompeleteComponent', () => {
  let component: PlacesAutocompeleteComponent;
  let fixture: ComponentFixture<PlacesAutocompeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesAutocompeleteComponent]
    });
    fixture = TestBed.createComponent(PlacesAutocompeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
