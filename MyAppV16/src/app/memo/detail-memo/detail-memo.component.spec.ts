import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMemoComponent } from './detail-memo.component';

describe('DetailMemoComponent', () => {
  let component: DetailMemoComponent;
  let fixture: ComponentFixture<DetailMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMemoComponent]
    });
    fixture = TestBed.createComponent(DetailMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
