import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService :PostService) { }

  ngOnInit() {

    this.cargarPosts();
  }

  cargarPosts() :void{

    this.postService.lista().subscribe(
      data =>{
        this.posts = data; // lo carga en el Array que hemos creado, llamado posts
      }, 
      err => {
        console.log(err);
      }
    );

  }

}
