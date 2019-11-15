import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentPollutionComponent } from './continent-pollution.component';

describe('ContinentPollutionComponent', () => {
  let component: ContinentPollutionComponent;
  let fixture: ComponentFixture<ContinentPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
