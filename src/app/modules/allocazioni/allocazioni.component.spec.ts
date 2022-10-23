import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocazioniComponent } from './allocazioni.component';

describe('AllocazioniComponent', () => {
  let component: AllocazioniComponent;
  let fixture: ComponentFixture<AllocazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
