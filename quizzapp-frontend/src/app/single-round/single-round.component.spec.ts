import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoundComponent } from './single-round.component';

describe('SingleRoundComponent', () => {
  let component: SingleRoundComponent;
  let fixture: ComponentFixture<SingleRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleRoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
