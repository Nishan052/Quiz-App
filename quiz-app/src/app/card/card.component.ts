import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() countryData: any;
@Input() flag: any;
  constructor() { }

random : any;
 successFlag: boolean | undefined;
 messageFlag: boolean | undefined;
 correct : string | undefined;

  ngOnInit(): void {
    this.successFlag = false;
    this.messageFlag = false;
    //wait for api to get response and send data here
    setTimeout(() => {
      this.nextQuetion()
    }, 1000);
    
    
  }
  
//function for next qution
  nextQuetion(){
    this.random = this.countryData[Math.floor(Math.random() * this.countryData.length)]
    this.messageFlag = false;
    
  }

  // funtion for start
  getstarted(){
    this.flag = true; 
  }

  backHome(){
    this.flag = false
  }

  //checking if the submitted value is correct or wrong
  submit(value: any){
    this.successFlag = false;
    this.messageFlag = true;
    if(this.random.capital == "" || this.random.capital.toLowerCase() != value.city.toLowerCase()){
      
      this.successFlag = false;
      this.correct = "failed"
    }else{
      this.successFlag = true;
      this.correct = "sucess"
    }
    setTimeout(() => {
      this.messageFlag = false;
    }, 10000);

  }
}
