import { Component, OnInit } from '@angular/core';
import { PatternService } from '../pattern.service';
import { ActivatedRoute } from '@angular/router';
import { Pattern } from '../Pattern';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pattern-details',
  templateUrl: './pattern-details.component.html',
  styleUrls: ['./pattern-details.component.css']
})
export class PatternDetailsComponent implements OnInit {
  patternDetails: Pattern;

  constructor(private patternService: PatternService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getPattern();
  }

  getPattern() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patternService.getPattern(id).subscribe((data) => { this.patternDetails = data; });
  }

  goBack() {
    this.location.back();
  }
}
