import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {

  @Input() article!: Article;
  @Output() notifyLike = new EventEmitter<Article>();

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  sendNotification() {
    this.notifyLike.emit(this.article);
  }
}
