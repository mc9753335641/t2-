import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlisterComponent } from './hostlister.component';

describe('HostlisterComponent', () => {
  let component: HostlisterComponent;
  let fixture: ComponentFixture<HostlisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostlisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostlisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
