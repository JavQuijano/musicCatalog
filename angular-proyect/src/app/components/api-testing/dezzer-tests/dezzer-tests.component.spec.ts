import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DezzerTestsComponent } from './dezzer-tests.component';

describe('DezzerTestsComponent', () => {
  let component: DezzerTestsComponent;
  let fixture: ComponentFixture<DezzerTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DezzerTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DezzerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
