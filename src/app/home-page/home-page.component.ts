import { Component, inject } from '@angular/core';
import { Article } from '../models/Article';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles$!: Observable<Article[]>;

  private router: Router = inject(Router);
  private http: HttpClient = inject(HttpClient);

  /*articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120,
      isLiked: false
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 75,
      isLiked: false
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200,
      isLiked: false
    }
  ];*/

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  goToArticlePage(articleId: number) {
    this.router.navigate(['/article', articleId])
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

}
