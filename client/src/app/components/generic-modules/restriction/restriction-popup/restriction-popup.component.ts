import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'trends-restriction-popup',
  templateUrl: './restriction-popup.component.html',
  styleUrls: ['./restriction-popup.component.css']
})
export class RestrictionPopupComponent implements OnInit, OnChanges {
  @Input() InutDataObj: any;
  @Output() onActon = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
}
  closeDialog(flag: any){
    this.onActon.emit({ flag: flag, page: 'restriction' });
  }

}
