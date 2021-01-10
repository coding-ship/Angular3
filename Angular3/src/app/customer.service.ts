import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private url='http://localhost:53226/api/';
//http://localhost:53226/api/Auth/AddNewUser
  constructor(private http:HttpClient) { }
    
  getusers():Observable<Customer[]>{
return this.http.get<Customer[]>(this.url+"GetUsers");
   }
 
   adduser(user:Customer):Observable<Customer>{  
    return this.http.post<Customer>(this.url+'AddNewUser',user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
    //.pipe(catchError(this.handleError));  
    }  
  
  

  

}
