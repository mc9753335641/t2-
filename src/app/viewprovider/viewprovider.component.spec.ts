import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproviderComponent } from './viewprovider.component';

describe('ViewproviderComponent', () => {
  let component: ViewproviderComponent;
  let fixture: ComponentFixture<ViewproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewproviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
