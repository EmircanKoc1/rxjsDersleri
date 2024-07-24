import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemeStandaloneComponent } from './deneme-standalone.component';

describe('DenemeStandaloneComponent', () => {
  let component: DenemeStandaloneComponent;
  let fixture: ComponentFixture<DenemeStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DenemeStandaloneComponent]
    });
    fixture = TestBed.createComponent(DenemeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
