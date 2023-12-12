import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMemoComponent } from './delete-memo.component';

describe('DeleteMemoComponent', () => {
  let component: DeleteMemoComponent;
  let fixture: ComponentFixture<DeleteMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMemoComponent]
    });
    fixture = TestBed.createComponent(DeleteMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
