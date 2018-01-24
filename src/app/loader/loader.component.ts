import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  
  isVisible: boolean = false;
  
  constructor(private communicationService: CommunicationService) { 
    communicationService.requestSended$.subscribe((status) =>{
      this.changeStatus(status);
    });
  }

  ngOnInit() {}

  changeStatus(status) {
    this.isVisible = status;
  }

}
