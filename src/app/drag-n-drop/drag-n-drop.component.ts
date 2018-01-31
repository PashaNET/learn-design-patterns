import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.styl']
})
export class DragNDropComponent implements OnInit {
  isDragStarted: boolean = false;
  topPos: number = 0;
  leftPos: number = 0;

  constructor() { }

  ngOnInit() {
  }

  dragStart(event: any) {
    console.log(event);
    this.topPos = event.pageY;
    this.leftPos = event.pageX;
    this.isDragStarted = !this.isDragStarted;
  }

  dragMove(event: any) {
    this.topPos = event.pageY;
    this.leftPos = event.pageX;
  }

  dragEnd(event: any) {
    console.log('end');
    this.isDragStarted = !this.isDragStarted;
  }
//set absolute
//take mouse positions
//set position to element
}
