import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudTestsComponent } from './soundcloud-tests.component';

describe('SoundcloudTestsComponent', () => {
  let component: SoundcloudTestsComponent;
  let fixture: ComponentFixture<SoundcloudTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundcloudTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundcloudTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
