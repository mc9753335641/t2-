import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributebindingComponent } from './attributebinding.component';

describe('AttributebindingComponent', () => {
  let component: AttributebindingComponent;
  let fixture: ComponentFixture<AttributebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributebindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
