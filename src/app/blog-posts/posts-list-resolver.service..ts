import { Injectable } from '@angular/core';

import { Post } from './post';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsListResolver implements Resolve<Post[]>{

  constructor(private postService: PostService) {  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>{   
    
    //TODO: need to add error handling
   return this.postService.getPosts();
  } 
}