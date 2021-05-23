import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTestsComponent } from './spotify-tests.component';

describe('SpotifyTestsComponent', () => {
  let component: SpotifyTestsComponent;
  let fixture: ComponentFixture<SpotifyTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
