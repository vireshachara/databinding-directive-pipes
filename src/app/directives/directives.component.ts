import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  
  success_msg = true;
  pass = false;
  fail = true;
  showMassage1 =false;
  user_msg = false;
  Veeresh =true;
  message : string = '';

  contact = [
    { 'firstName' : 'Veeresh',
      'MobileNo': '9861536225',
      'placeOfBirth' : 'Sindhanur'
    },
    { 'firstName' : 'Anand',
      'MobileNo': '9583454354',
      'placeOfBirth' : 'Karatagi'
    },
    { 'firstName' : 'janardhan',
      'MobileNo': '997256899',
      'placeOfBirth' : 'Singapur'
    }
  ]
  name = [ 'Ramesh', 'Suresh', 'Mahesh', 'Veeresh']
  population = 12500000 ;
  age = 25;
  styleProp = 'cyan';
  textcolor = 'green';
  //CSS shown for color based on the success or error
  isBoolian =true;
  classProp = 'c3';
  propClass ='c4';
  displayNotification : boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }

  constructor() { }

  ngOnInit(): void {
  }


}











// contacts  =[
//   {
//     'firstName' : 'Veeresh',
//     'lastName' : "Achari",
//     'Age' : 29
//   },
//   {
//     'firstName' : 'Janardhan',
//     'lastName' : "Achari",
//     'Age' : 26
//   },
//   {
//     'firstName' : 'Shashi',
//     'lastName' : "Achari",
//     'Age' : 28
//   }
// ]