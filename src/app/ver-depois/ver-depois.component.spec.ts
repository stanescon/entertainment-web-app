import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDepoisComponent } from './ver-depois.component';

describe('VerDepoisComponent', () => {
  let component: VerDepoisComponent;
  let fixture: ComponentFixture<VerDepoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDepoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDepoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
