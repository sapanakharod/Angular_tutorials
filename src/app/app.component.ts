import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temperatureConvertor';

  // @ts-ignore
  celsiusvalue: number;
  // @ts-ignore
  fahrenheitvalue: number;


  celsiustofahrenheit() {
    this.fahrenheitvalue=((this.celsiusvalue*9)/5)+32;
  }

  fahrenheittocelsius() {
    this.celsiusvalue=((this.fahrenheitvalue-32)*5)/9;
  }
}
