import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueverComponent } from './quever.component';

describe('QueverComponent', () => {
  let component: QueverComponent;
  let fixture: ComponentFixture<QueverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
