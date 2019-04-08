import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../messages/message.service';
import { PostService } from '../post.service';

import { Post, PostResolved } from '../post';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit{
  pageTitle = 'post Edit';
  errorMessage: string;

  post: Post;
  postId: number

  constructor(private postService: PostService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.route.data.subscribe(data => {
      const resolvedData = data['post']
      this.errorMessage = resolvedData.error;
      this.onPostRetrieved(resolvedData.post)
    })
  }

  onPostRetrieved(post: Post): void {
    this.post = post;

    if (!this.post) {
      this.pageTitle = 'No post found';
    } else {
      if (this.post.id === 0) {
        this.pageTitle = 'Add post';
      } else {
        this.pageTitle = `Edit post: ${this.post.postTitle}`;
      }
    }
  }

  deletePost(): void {
    if (this.post.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.post.postTitle} was deleted`);
    } else {
      if (confirm(`Really delete the post: ${this.post.postTitle}?`)) {
        this.postService.deletePost(this.post.id)
          .subscribe(
            () => this.onSaveComplete(`${this.post.postTitle} was deleted`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
    this.router.navigate(['/posts']);
  }

  savePost(): void {
    if (true === true) {
      if (this.post.id === 0) {
        this.postService.createPost(this.post)
          .subscribe(
            () => this.onSaveComplete(`The new ${this.post.postTitle} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      } else {
        this.postService.updatePost(this.post)
          .subscribe(
            () => this.onSaveComplete(`The updated ${this.post.postTitle} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }

    // Navigate back to the product list
    this.router.navigate(['posts']);

  }
}
