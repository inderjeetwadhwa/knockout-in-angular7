import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnockoutContainerComponent } from './knockout-container.component';

describe('KnockoutContainerComponent', () => {
  let component: KnockoutContainerComponent;
  let fixture: ComponentFixture<KnockoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnockoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnockoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
