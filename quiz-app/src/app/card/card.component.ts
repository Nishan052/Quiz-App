import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() countryData: any;
  constructor() { }

random : any;
 flag :boolean | undefined;
 successFlag: boolean | undefined;
 messageFlag: boolean | undefined;
 color : string | undefined;

  ngOnInit(): void {
    this.successFlag = false;
    this.messageFlag = false;
    this.flag = false
    //wait for api to get response and send data here
    setTimeout(() => {
      console.log("Data", this.countryData);
      this.nextQuetion()
    }, 1000);
    
    
  }
//function for next qution
  nextQuetion(){
    this.random = this.countryData[Math.floor(Math.random() * this.countryData.length)]
    console.log(this.random);
    this.messageFlag = false;
    
  }

  // funtion for start
  getstarted(){

    this.flag = true; 
  }

  //checking if the submitted value is correct or wrong
  submit(value: any){
    this.successFlag = false;
    this.messageFlag = true;
    if(this.random.capital.toLowerCase() === value.city.toLowerCase()){
      console.log(true);
      this.successFlag = true;
      this.color = "green"
    }else{
      console.log(false);
      this.successFlag = false;
      this.color = "red"
    }
    setTimeout(() => {
      this.messageFlag = false;
    }, 10000);

  }
}
