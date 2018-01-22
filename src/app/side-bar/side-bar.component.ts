import { Component, OnInit } from '@angular/core';
import { PatternService } from '../pattern.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems = [];

  constructor(private patternService: PatternService) {}

  ngOnInit() {
    this.getPatternList();
  }

  getPatternList() {
    this.patternService.getPatterns().subscribe((data) => {
      this.menuItems = data.map((item) => { 
        return {id: item.id, title: item.title};
      });
    });
  }
}
