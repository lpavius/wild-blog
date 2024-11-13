import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [HttpClientModule, ArticleComponent, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  articleId!: number;
  article$!: Observable<Article>;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private http: HttpClient = inject(HttpClient);


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.getArticleById(this.articleId);
      console.log(this.article$);
    })

  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

}
