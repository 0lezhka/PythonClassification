import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonClassificationComponent } from './python-classification.component';

describe('PythonClassificationComponent', () => {
  let component: PythonClassificationComponent;
  let fixture: ComponentFixture<PythonClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
