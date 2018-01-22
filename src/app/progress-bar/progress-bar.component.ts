import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  color = 'warn';
  mode = 'determinate';
  value = 40;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
  }

}
