import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactivformComponent } from './ractivform.component';

describe('RactivformComponent', () => {
  let component: RactivformComponent;
  let fixture: ComponentFixture<RactivformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RactivformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RactivformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
