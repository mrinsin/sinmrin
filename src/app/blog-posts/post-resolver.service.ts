import { Injectable } from '@angular/core';

import { Post, PostResolved } from './post';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostResolved>{

  constructor(private postService: PostService) {  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostResolved>{
    const id = route.paramMap.get('id');
    
    if (isNaN(+id)){
      const message = `Post id was not a number, in Post Resolver: ${id}`
      console.error(message);
      return of({post: null, error: message});
    } 
    
    return this.postService.getPost(+id)
      .pipe(
        map(post => ({post: post})),
        catchError(error => {
          const message = `Retrieval Error in Post Resolver: ${id}`
          console.error(message);
          return of({post: null, error: message});
        })
      );
  } 
}