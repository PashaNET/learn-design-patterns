import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
// import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() varFromParentComponent: string;
  @Output() valueWasChanged = new EventEmitter<string>();
  constructor() {}

  changeVal() {//call when data should be synchronized with parent
    this.changeVarFromParentComponent();
  }

  changeVarFromParentComponent() {
    this.varFromParentComponent = this.varFromParentComponent + '->';
    this.valueWasChanged.emit(this.varFromParentComponent);
  } 

  ngOnInit() {
    // console.log(this.changeVarFromParentComponent());
  }

}
