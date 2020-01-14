import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { Post } from '../shared/posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  posts: Observable<Post[]>
  postIndex = 0;
  NUM_POSTS = 3;
  ngOnInit() {
    //since component not reused we can use snapshot not rxjs observable
    const blogId = this.route.snapshot.paramMap.get('blogId')
    console.log(blogId)
    this.posts = this.blogService.getPosts(blogId)/*.subscribe(posts =>{
      this.posts = posts;
    })*/
    }
    handlePrevious(){
      
          this.postIndex = this.postIndex - this.NUM_POSTS
      
  }

  handleNext(){
     
         this.postIndex= this.postIndex + this.NUM_POSTS
      }
  }



