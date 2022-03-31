import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimemenuComponent } from './primemenu.component';

describe('PrimemenuComponent', () => {
  let component: PrimemenuComponent;
  let fixture: ComponentFixture<PrimemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
