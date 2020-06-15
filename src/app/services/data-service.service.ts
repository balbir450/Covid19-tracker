import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GlobalDataSummary } from '../models/global-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient){}

  getcountries() :Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }

  getalert(country):Observable<any>{
    const url='https://api.covid19api.com/total/dayone/country/' + country
       return this.http.get<any>(url)
  }

}

