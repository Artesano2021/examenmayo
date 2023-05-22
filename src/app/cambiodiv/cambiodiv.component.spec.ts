import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiodivComponent } from './cambiodiv.component';

describe('CambiodivComponent', () => {
  let component: CambiodivComponent;
  let fixture: ComponentFixture<CambiodivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiodivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiodivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
