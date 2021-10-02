import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {


  posts: Post[] = [];

  // isAdmin: number = window.localStorage.role;

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
