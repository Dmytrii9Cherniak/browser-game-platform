import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWrapperComponentComponent } from './main-wrapper-component.component';

describe('MainWrapperComponentComponent', () => {
  let component: MainWrapperComponentComponent;
  let fixture: ComponentFixture<MainWrapperComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainWrapperComponentComponent]
    });
    fixture = TestBed.createComponent(MainWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
