import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaryPageComponent } from './temary-page.component';

describe('TemaryPageComponent', () => {
  let component: TemaryPageComponent;
  let fixture: ComponentFixture<TemaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
