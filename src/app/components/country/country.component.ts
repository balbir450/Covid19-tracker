import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:any
  country:any
  confirmed:Number
  recovered:Number
  death:Number
 
   constructor(private dataservice : DataServiceService) { }
 
   ngOnInit(){
     this.dataservice.getcountries() .subscribe((data)=>{
     console.log(data)
     this.countries= data
     })
   }
   getcountry(country:any){
     this.country = country;
   }
   getCoronadata(){
     this.dataservice.getalert(this.country).subscribe((data )=>{
       console.log(data)
       var index = data.length - 1;
       this.confirmed = data[index].Confirmed
       this.recovered = data[index].Recovered
       this.death = data[index].Deaths
     })
   }
 
 
 }