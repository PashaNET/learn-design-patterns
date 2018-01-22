import { Component, OnInit } from '@angular/core';
import { PatternService } from '../pattern.service';
import { ActivatedRoute } from '@angular/router';
import { Pattern } from '../Pattern';

@Component({
  selector: 'app-pattern-details',
  templateUrl: './pattern-details.component.html',
  styleUrls: ['./pattern-details.component.css']
})
export class PatternDetailsComponent implements OnInit {
  patternDetails: Pattern;
  constructor(private patternService: PatternService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPattern();
  }

  getPattern() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patternService.getPattern(id).subscribe((data) => { this.patternDetails = data;});
  }

}
