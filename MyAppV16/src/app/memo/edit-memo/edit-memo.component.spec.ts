import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemoComponent } from './edit-memo.component';

describe('EditMemoComponent', () => {
  let component: EditMemoComponent;
  let fixture: ComponentFixture<EditMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMemoComponent]
    });
    fixture = TestBed.createComponent(EditMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
