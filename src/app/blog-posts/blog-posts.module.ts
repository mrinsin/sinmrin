import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogPostsComponent } from './blog-posts.component';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const blogRoutes = [
  {path: 'posts', component: BlogPostsComponent },
  {path: 'posts/:id', component: PostDetailComponent },
  {path: 'posts/:id/edit', component: PostEditComponent }
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
