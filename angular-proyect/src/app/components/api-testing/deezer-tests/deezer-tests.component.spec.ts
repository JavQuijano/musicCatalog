import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerTestsComponent } from './deezer-tests.component';

describe('DezzerTestsComponent', () => {
  let component: DeezerTestsComponent;
  let fixture: ComponentFixture<DeezerTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
