import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Auth() {
    throw new Error('Method not implemented.');
  }
  services() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  get()
  {
    return this.http.get('https://localhost:7061/api/emp/getEmployeeList');
  }
  postApi(a:any)
  {
   return this.http.post('https://localhost:7061/api/emp/postall',a);
  }
  putApi(x:any)
  {
    return this.http.put('https://localhost:7061/api/emp/updatingData',x);
  }
  DeleteApi(y:any)
  {
    return this.http.delete('https://localhost:7061/api/emp/deleteall',y);
  }
}
