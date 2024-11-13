import { Component, inject } from '@angular/core';
import { Article } from '../models/Article';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleComponent, HttpClientModule],
  providers: [ApiService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles$!: Observable<Article[]>;

  private router: Router = inject(Router);
  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    return this.apiService.getArticles();
  }

  goToArticlePage(articleId: number) {
    this.router.navigate(['/article', articleId])
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

}
