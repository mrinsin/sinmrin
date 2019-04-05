import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blogPosts.service';
import { BlogPost } from './blogPosts';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  pageTitle = 'post Detail';
  post: BlogPost;
  errorMessage: string;
  postId: number;

  constructor(private postService: BlogPostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.postId = data["id"];
     this.getPost(this.postId)
    })
  }
  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      post => this.onPostRetrieved(post),
      error => this.errorMessage = <any>error);
  }

  onPostRetrieved(post: BlogPost): void {
    console.log('retrieved ::' + post.postTitle)

    this.post = post;

    if (this.post) {
      this.pageTitle = `Post Detail: ${this.post.postTitle}`;
    } else {
      this.pageTitle = 'No post found';
    }
  }
}
