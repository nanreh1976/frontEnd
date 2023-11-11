import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

 // url: string = "https://nanreh1976.herokuapp.com/api";
url: string = environment.apiUrl;

 
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/redes/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/redes');
	}
  //terminar en algun momento
  update(id: number, red: any): Observable<any>{
    return this.http.put(this.url + `/redes/${id}`, red);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/redes/${id}`);
  }
 save(red:any) : Observable<any>{
   return this.http.post(this.url + `/redes/`, red);
 }
}
