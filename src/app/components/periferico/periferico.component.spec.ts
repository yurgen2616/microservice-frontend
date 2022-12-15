import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericoComponent } from './periferico.component';

describe('PerifericoComponent', () => {
  let component: PerifericoComponent;
  let fixture: ComponentFixture<PerifericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerifericoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerifericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
