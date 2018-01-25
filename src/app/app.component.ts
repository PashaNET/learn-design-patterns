import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  someCalculation(numb: number) {
    if(numb == 5)
      return 6;
    
    return numb++;
  }
}
