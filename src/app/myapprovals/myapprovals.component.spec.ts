import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyapprovalsComponent } from './myapprovals.component';

describe('MyapprovalsComponent', () => {
  let component: MyapprovalsComponent;
  let fixture: ComponentFixture<MyapprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyapprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
