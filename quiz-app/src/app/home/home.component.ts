import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.getData().subscribe(response =>{
      this.data = [...response.data]
      console.log(this.data);
      
    })
  }

  getData(){
    return this.http.get<any>("https://countriesnow.space/api/v0.1/countries/capital")
  }

}
