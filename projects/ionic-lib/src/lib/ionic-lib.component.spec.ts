import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicLibComponent } from './ionic-lib.component';

describe('IonicLibComponent', () => {
  let component: IonicLibComponent;
  let fixture: ComponentFixture<IonicLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
