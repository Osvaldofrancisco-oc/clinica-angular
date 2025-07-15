import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentesComponent } from './utentes.component';

describe('UtentesComponent', () => {
  let component: UtentesComponent;
  let fixture: ComponentFixture<UtentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
