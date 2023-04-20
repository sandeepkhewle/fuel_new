import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'fyt-select-all',
  templateUrl: 'select-all.component.html'
})
export class SelectAllComponent implements OnInit {
  @Input()
  model!: NgModel;
  @Input() values: any;
  @Input() text = 'Select All';
  @Output() onSelectAll = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  isChecked() {
    if (this.values && this.values['options']) {
      return this.model.value && this.values['options'].length
        && this.model.value.length === this.values['options'].length;
    }
  }

  isIndeterminate() {
    if (this.values && this.values['options']) {
      return this.model.value && this.values['options'].length && this.model.value.length
        && this.model.value.length < this.values['options'].length;
    }
  }

  toggleSelection(change: MatCheckboxChange): void {
    if (change.checked) {
      // for dynamic filters
      if (this.values && this.values['options'] && this.values['options'].length > 0) {
        if (this.values && this.values['display']) {
          let dis = this.values['value'];
          this.model.update.emit(this.values['options'].map((each:any) => each[dis]));
        } else {
          this.model.update.emit(this.values['options'].map((each:any) => each));
        }
      }
      // static filters depends on the keys
      if (this.values && this.values.length > 0) {
        if (this.values[0].id) {
          this.model.update.emit(this.values.map((each:any) => each.id));
        }
      }
      if (this.values && this.values['onChangeParam1']) {
        this.onSelectAll.emit({ param: this.values['onChangeParam1'], model: this.values['model'] });
      }
    } else {
      this.model.update.emit([]);
      this.onSelectAll.emit()
    }
  }
}