import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/core/entity/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public serverHost:string = 'http://localhost:8080/categorias';
  
  constructor(private http:HttpClient) { }

  getCategoryList(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.serverHost);
  }
  postCategory(categoria:Category):Observable<Category>{
    return this.http.post<Category>(this.serverHost, categoria);
  }
}
