import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';

import { BlogPostsComponent } from './blog-posts.component';
import { PostDetailComponent } from './post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostEditInfoComponent } from './post-edit/post-edit-info.component';
import { PostEditTagsComponent } from './post-edit/post-edit-tags.component';

import { PostResolver } from './post-resolver.service';
import { PostsListResolver } from './posts-list-resolver.service.';

const blogRoutes = [
    { path:'',
      component: BlogPostsComponent,
      resolve: { postsList: PostsListResolver }
    },
    { 
      path: ':id', 
      component: PostDetailComponent, 
      resolve: { post: PostResolver }
    },
    {
      path: ':id/edit', 
      component: PostEditComponent, 
      canActivate: [AuthGuard],
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
  ];

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
