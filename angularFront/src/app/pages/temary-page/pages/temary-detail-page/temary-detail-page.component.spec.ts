import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaryDetailPageComponent } from './temary-detail-page.component';

describe('TemaryDetailPageComponent', () => {
  let component: TemaryDetailPageComponent;
  let fixture: ComponentFixture<TemaryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaryDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
