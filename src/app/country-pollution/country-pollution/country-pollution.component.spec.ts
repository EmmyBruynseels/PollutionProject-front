import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPollutionComponent } from './country-pollution.component';

describe('CountryPollutionComponent', () => {
  let component: CountryPollutionComponent;
  let fixture: ComponentFixture<CountryPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
