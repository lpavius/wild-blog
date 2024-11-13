import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'http://localhost:3000/articles';

  //private http: HttpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${articleId}`);
  }
}
