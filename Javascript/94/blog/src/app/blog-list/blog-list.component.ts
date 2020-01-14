import { Component, OnInit /*OnDestroy*/} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogServerProps, Blog } from '../shared/blog';
import { Subscription, Observable } from 'rxjs';
import { BlogService } from '../shared/blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  //blogs: Blog [];
  //private subscription: Subscription;


  blogs: Observable<Blog[]>;

  constructor(/*private httpClient: HttpClient*/private blogService: BlogService) { }

  ngOnInit() {
  /*this.subscription = this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        blogs =>this.blogs = blogs.map(
          b=>({
            id: b.id,
            name: b.name,
            website: b.website,
            company: b.company.name
          })

        ) ,
        error => console.error(error)
      );*/
      /*this.blogs = this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(blogs =>
        blogs.map(
          b=>({
            id: b.id,
            name: b.name,
            website: b.website,
            company: b.company.name
          })

        )) ,
       
      );*/
      this.blogs = this.blogService.getBlogs()
  }
  /*ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
      
  }*/

}
