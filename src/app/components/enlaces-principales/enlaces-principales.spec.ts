import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesPrincipales } from './enlaces-principales';

describe('EnlacesPrincipales', () => {
  let component: EnlacesPrincipales;
  let fixture: ComponentFixture<EnlacesPrincipales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesPrincipales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesPrincipales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
