import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BlogPostsComponent } from './blog-posts.component';
import { PostDetailComponent } from './post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { PostResolver } from './post-resolver.service';
import { PostEditInfoComponent } from './post-edit/post-edit-info.component';
import { PostEditTagsComponent } from './post-edit/post-edit-tags.component';

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
    resolve: { post: PostResolver },
    children: [
      {
        path: '', redirectTo: 'info', pathMatch: 'full'
      },
      {
        path: 'info', component: PostEditInfoComponent
      },
      {
        path: 'tags', component: PostEditTagsComponent
      }
    ] 
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
    PostEditComponent,
    PostEditInfoComponent,
    PostEditTagsComponent
  ]
})
export class BlogPostsModule { }
