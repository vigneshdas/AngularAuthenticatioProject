import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDeniendComponent } from './permission-deniend.component';

describe('PermissionDeniendComponent', () => {
  let component: PermissionDeniendComponent;
  let fixture: ComponentFixture<PermissionDeniendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionDeniendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDeniendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
