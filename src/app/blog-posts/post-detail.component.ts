import { Component, OnInit } from '@angular/core';
import { Post, PostResolved } from './post';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  pageTitle = 'post Detail';
  post: Post;
  errorMessage: string;
  postId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const resolvedData = data['post']
      this.errorMessage = resolvedData.error;
      this.onPostRetrieved(resolvedData.post)
    })
  }

  onPostRetrieved(post: Post): void {
    this.post = post;

    if (this.post) {
      this.pageTitle = `Post Detail: ${this.post.postTitle}`;
    } else {
      this.pageTitle = 'No post found';
    }
  }
}
