import { Component } from '@angular/core';
import { BlogPostService } from './blogPosts.service';
import { BlogPosts } from './blogPosts';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  pageTitle = 'post Detail';
  post: BlogPosts;
  errorMessage: string;

  constructor(private postService: BlogPostService) { }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      post => this.onPostRetrieved(post),
      error => this.errorMessage = <any>error);
  }

  onPostRetrieved(post: BlogPosts): void {
    this.post = post;

    if (this.post) {
      this.pageTitle = `post Detail: ${this.post.postTitle}`;
    } else {
      this.pageTitle = 'No post found';
    }
  }
}
