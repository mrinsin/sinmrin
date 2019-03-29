import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogPostsComponent } from './blog-posts.component';
import { RouterModule } from '@angular/router';

const blogRoutes = [
  {path: 'blogs', component: BlogPostsComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
