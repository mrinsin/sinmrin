import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blogPOsts.service';
import { BlogPost } from './blogPosts';

@Component({
  selector: 'pm-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  pageTitle = 'Blog Posts';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPosts = this.listFilter ? this.performFilter(this.listFilter) : this.blogPosts;
  }

  filteredPosts: BlogPost[] = [];
  blogPosts: BlogPost[] = [];

  constructor(private postService: BlogPostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      blogPosts => {
        this.blogPosts = blogPosts;
        this.filteredPosts = this.performFilter(this.listFilter);
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): BlogPost[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogPosts.filter((posts: BlogPost) =>
      posts.postTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}

