import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Persona } from '../interface/Persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

 // url: string = "https://nanreh1976.herokuapp.com/api";
  url: string = environment.apiUrl;
 
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/personas/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/personas');
	}
  //terminar en algun momento
  update(id: number, persona: any): Observable<any>{
    return this.http.put(this.url + `/personas/${id}`, persona);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/personas/${id}`);
  }
 save(persona:any) : Observable<any>{
   return this.http.post(this.url + `/personas/`, persona);
 }


}
