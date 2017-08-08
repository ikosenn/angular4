import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItempComponent } from './user-itemp.component';

describe('UserItempComponent', () => {
  let component: UserItempComponent;
  let fixture: ComponentFixture<UserItempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
