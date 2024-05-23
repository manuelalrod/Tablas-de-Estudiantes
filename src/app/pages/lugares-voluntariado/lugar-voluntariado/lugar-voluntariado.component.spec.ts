import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarVoluntariadoComponent } from './lugar-voluntariado.component';

describe('LugarVoluntariadoComponent', () => {
  let component: LugarVoluntariadoComponent;
  let fixture: ComponentFixture<LugarVoluntariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarVoluntariadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LugarVoluntariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
