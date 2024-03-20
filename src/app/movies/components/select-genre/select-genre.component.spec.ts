import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenreComponent } from './select-genre.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

describe('SelectGenreComponent', () => {
  let component: SelectGenreComponent;
  let fixture: ComponentFixture<SelectGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgMultiSelectDropDownModule, FormsModule],
      declarations: [SelectGenreComponent]
    });
    fixture = TestBed.createComponent(SelectGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
