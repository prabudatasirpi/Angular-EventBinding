import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  ColumnSpan: number = 2;
  FirstName: string = 'Prabu';
  LastName: string = 'Kannappan';
  Branch: string = 'Mechanical';
  Mobile: number = 9876543210
  Gender: string = 'Male';
  Age: number = 22;
  ShowDetails: boolean = false;


  ToggleDetails(): void {
      this.ShowDetails = !this.ShowDetails;
  }

  buttonClicked(){
    alert("Click me");
  }

}
