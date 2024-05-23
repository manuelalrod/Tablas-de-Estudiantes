import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasVoluntariadoComponent } from './horas-voluntariado.component';

describe('HorasVoluntariadoComponent', () => {
  let component: HorasVoluntariadoComponent;
  let fixture: ComponentFixture<HorasVoluntariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorasVoluntariadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorasVoluntariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
