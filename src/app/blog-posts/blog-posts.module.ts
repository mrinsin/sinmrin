import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BlogPostsComponent } from './blog-posts.component';
import { PostDetailComponent } from './post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { PostResolver } from './post-resolver.service';

const blogRoutes = [
  {
    path: 'posts', 
    component: BlogPostsComponent 
  },
  {
    path: 'posts/:id', 
    component: PostDetailComponent, 
    resolve: { post: PostResolver }
  },
  {
    path: 'posts/:id/edit', 
    component: PostEditComponent, 
    resolve: { post: PostResolver } 
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [
    BlogPostsComponent,
    PostDetailComponent,
    PostEditComponent
  ]
})
export class BlogPostsModule { }
