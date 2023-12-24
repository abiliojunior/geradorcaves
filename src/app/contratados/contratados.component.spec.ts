import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratadosComponent } from './contratados.component';

describe('ContratadosComponent', () => {
  let component: ContratadosComponent;
  let fixture: ComponentFixture<ContratadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratadosComponent]
    });
    fixture = TestBed.createComponent(ContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
