import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private toastr: ToastrService) { }

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

  borrar(id: number){

    this.postService.delete(id).subscribe(
      data => {
        this.toastr.success('Artículo eliminado', '', {
          timeOut: 3000
        });
        this.cargarPosts();

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
      }
    );


  }

}
