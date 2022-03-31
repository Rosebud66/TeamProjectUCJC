import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //@Input() productForm: any;
  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get('http://localhost:3000/countries');
  }
  getCountry(id : any){
    return this.http.get('http://localhost:3000/countries/' + id);
  }
  postCountry(country: any) {
    delete country.id;
    console.log(country);
    return this.http.post('http://localhost:3000/countries/', country);
  }
  
  deleteCountry(country: any){
    return this.http.delete('http://localhost:3000/countries/' + country.id);
  }

  putCountry(country: any) {
    return this.http.put('http://localhost:3000/countries/'+ country.id, country);
  }
}
