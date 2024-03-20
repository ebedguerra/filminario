import { Component, Input, OnInit,OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-select-genre',
  templateUrl: './select-genre.component.html',
  styleUrls: ['./select-genre.component.scss']
})
export class SelectGenreComponent implements OnInit { 
  @Input() genres!: string[];
  @Output() SelectGenresChange = new EventEmitter<any[]>();
  selectedItems!:any[];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    this.selectedItems = this.genres;
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
    
  }

  onItemSelect(item: any) {
    console.log(this.selectedItems)
    this.SelectGenresChange.emit(this.selectedItems);
  }
  onSelectAll(item: any) {
    this.selectedItems = [...this.genres];
    this.SelectGenresChange.emit(this.selectedItems);
  }
  onItemDeSelect(item: any) {
    console.log(this.selectedItems)
    this.SelectGenresChange.emit(this.selectedItems);
  }
  onDeSelectAll(item: any) {
    this.selectedItems= []
    console.log(this.selectedItems)
    this.SelectGenresChange.emit(this.selectedItems);
  } 

}
