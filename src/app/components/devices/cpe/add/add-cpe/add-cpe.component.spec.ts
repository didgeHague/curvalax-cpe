import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCpeComponent } from './add-cpe.component';

describe('AddCpeComponent', () => {
  let component: AddCpeComponent;
  let fixture: ComponentFixture<AddCpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
