import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blogPOsts.service';
import { BlogPosts } from './blogPosts';

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

  filteredPosts: BlogPosts[] = [];
  blogPosts: BlogPosts[] = [];

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

  performFilter(filterBy: string): BlogPosts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogPosts.filter((posts: BlogPosts) =>
      posts.postTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}

