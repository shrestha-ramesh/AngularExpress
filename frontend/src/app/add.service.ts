import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddService {
 
  url = '';
  constructor(private http: HttpClient) { }

  result(formgroup: FormGroup){
    return this.http.post<any>(this.url, formgroup);
  }
}
