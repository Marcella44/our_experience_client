import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostComponent } from "../post/post.component";
import { PostService } from '../services/post.service';


@Component({
    selector: 'app-post-list',
    standalone: true,
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.scss',
    imports: [PostComponent]
})
export class PostListComponent implements OnInit{
  posts: Post[] = [
    // new Post({
    //   id: 1,
    //   subject: 'test',
    //   content: 'test',
    //   created_at: new Date(),
    //   updated_at: new Date(),
    //   user: {
    //     username: 'Username',
    //   }
    // })
  ];


  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error: any) => {
        console.error('Error fetching posts:', error);
      }
    })
  }
}
