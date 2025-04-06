import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../news.service'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data.map(item => ({
        title: item.title,
        description: 'This is a sample description for news.',
        image: item.thumbnailUrl,
        date: new Date().toDateString()
      }));
    });
  }
}
