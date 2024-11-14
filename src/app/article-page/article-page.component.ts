import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  articleId!: number;
  article$!: Observable<Article>;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private apiService: ApiService = inject(ApiService);


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.getArticleById(this.articleId);
      console.log(this.article$);
    })

  }

  getArticleById(id: number): Observable<Article> {
    return this.apiService.getArticleById(id);
  }

}
