import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { BlogPost } from './blogPosts';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private blogPostsUrl = 'api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogPostsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getPost(id: number): Observable<BlogPost> {
    if (id === 0) {
      return of(this.initializePost());
    }
    const url = `${this.blogPostsUrl}/${id}`;
    console.log('I HERE')
    return this.http.get<BlogPost>(url)
      .pipe(
        tap(data => console.log('getPost: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    post.id = null;
    return this.http.post<BlogPost>(this.blogPostsUrl, post, { headers: headers })
      .pipe(
        tap(data => console.log('createPost: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deletePost(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.blogPostsUrl}/${id}`;
    return this.http.delete<BlogPost>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deletePost: ' + id)),
        catchError(this.handleError)
      );
  }

  updatePost(post: BlogPost): Observable<BlogPost> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.blogPostsUrl}/${post.id}`;
    return this.http.put<BlogPost>(url, post, { headers: headers })
      .pipe(
        tap(() => console.log('updatePost: ' + post.id)),
        // Return the Post on an update
        map(() => post),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializePost(): BlogPost {
    // Return an initialized object
    return {
      id: 0,
      postTitle: null,
      postDate: null,
      category: null,
      tags: null,
      postBody: null,
      imageUrl: null
    };
  }
}
