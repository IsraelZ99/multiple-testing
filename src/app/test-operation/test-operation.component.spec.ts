import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOperationComponent } from './test-operation.component';

describe('TestOperationComponent', () => {
  let component: TestOperationComponent;
  let fixture: ComponentFixture<TestOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
