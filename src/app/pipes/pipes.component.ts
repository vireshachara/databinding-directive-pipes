import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  lowerCaseExample = "CONVERT UPPER CASE WORDS TO LOWER CASE WORDS";
  upperCaseExample = "convert lower case words to upper case words";
  // dateExample = Date.now()
  jsonExample = { username: "arc", major: "Angular", experience: 10};
  currencyExample = 125;
  percentExample = 0.675869 ;
  dateExample =Date.now();
  b : number = 1.3495;
  str: string = 'abcdefghijklmnopqrstuv';
}
