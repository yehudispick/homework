import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BlogServerProps} from '../shared/blog';
import {  Post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 

  constructor( private httpClient: HttpClient) { }
  getBlogs(): Observable<Blog[]>{
    return this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(map(blogs =>
      blogs.map(
        b=>({
          id: b.id,
          name: b.name,
          website: b.website,
          company: b.company.name
        })

      )) ,
     
    );
    }

    getPosts(blogId: string): Observable<Post[]>{
      return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`)
    
  }
}
