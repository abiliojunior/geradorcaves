import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventureirosComponent } from './aventureiros.component';

describe('AventureirosComponent', () => {
  let component: AventureirosComponent;
  let fixture: ComponentFixture<AventureirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AventureirosComponent]
    });
    fixture = TestBed.createComponent(AventureirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
