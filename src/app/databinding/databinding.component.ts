import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  

  title = '1.One way Data-binding';
  title2 = '2.Two way Data-binding';
  page_count = 20;
  user_object = { first_name: 'Viresh', last_name: 'Achari' };
  array = [55, 568, 5456, 'Veeresh', 'Bangalore', 55];
  isUserLoggedIn = true;
  name1 = { first_name: 'Anand', last_name: 'Shettty' };
  contact = [
    { firstName: 'Veeresh', MobileNo: '9861536225', placeOfBirth: 'Sindhanur' },
    { firstName: 'Anand', MobileNo: '9583454354', placeOfBirth: 'Karatagi' },
  ];
  serverId : number = 10;
  serverStatus : string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

  text: string = 'Bangalore is the software hub of india';
  isShow: boolean = false;
  text1: string = 'Couples';
  source: string = '/assets/image.jpg';
  name: string = 'Veeresh';
  disableBox: boolean = true;
  colVal = 2;
  showMassage: boolean = false;
  sayHello() {
    this.showMassage =true;
  }
  isUserAuth: boolean = true;
  displayHide: boolean = false;
  searchValue: string = '';
  user_name = '';
  twoWay: string;
  user1: any;
  errorMassage: any;

  allowNewServer: boolean = false;
  serverCreationStatus ="No server was created";


  constructor() {
    this.twoWay = 'Two way data binding ';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  showInput() {
    this.disableBox = false;
  }
 
  onCreateServer(){
    this.serverCreationStatus = "Server was created Successfully!";
  }

  highlightBgColor() {
    console.log('Highlight the BG Color');
  }
  focusOn() {
    console.log('Enter the Name');
  }
  hideContent() {
    this.displayHide = true;
  }
  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
  getUser1(event: any) {
    console.log(this.user1);
    if (this.user1 == 'veeresh') {
      window.alert('Logged in Succesfully');
      this.errorMassage = false;
    } else {
      window.alert('User Name Entered is Wrong');
      this.errorMassage = true;
    }
  }
}
