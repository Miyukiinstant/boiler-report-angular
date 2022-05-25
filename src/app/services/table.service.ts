import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Report } from '../interfaces/report';
import { Urls } from '../interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  getTable(): Observable<Report>{
    return this.http.get<Report>(new Urls().urls.get)
  }
  postTable(form:NgForm): Observable<Post>{
    return this.http.post<Post>(new Urls().urls.post,form.value)
  }
}
