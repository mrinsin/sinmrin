import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { ActivatedRoute } from '@angular/router';

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

  filteredPosts: Post[] = [];
  blogPosts: Post[] = [];

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || ''
    this.showImage = this.route.snapshot.queryParamMap.get('showImage')  === 'true'

    this.postService.getPosts().subscribe(
      blogPosts => {
        this.blogPosts = blogPosts;
        this.filteredPosts = this.performFilter(this.listFilter);
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Post[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogPosts.filter((posts: Post) =>
      posts.postTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}

