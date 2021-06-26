import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkOverlayComponent } from './dark-overlay.component';

describe('DarkOverlayComponent', () => {
  let component: DarkOverlayComponent;
  let fixture: ComponentFixture<DarkOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
