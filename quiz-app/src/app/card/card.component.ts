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
    setTimeout(() => {
      console.log("Data", this.countryData);
      this.nextQuetion()
    }, 1000);
    
    
  }

  nextQuetion(){
    this.random = this.countryData[Math.floor(Math.random() * this.countryData.length)]
    console.log(this.random);
    this.messageFlag = false;
    
  }
  getstarted(){

    this.flag = true; 
  }
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