import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertenenciasComponent } from './pertenencias.component';

describe('PertenenciasComponent', () => {
  let component: PertenenciasComponent;
  let fixture: ComponentFixture<PertenenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertenenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertenenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
