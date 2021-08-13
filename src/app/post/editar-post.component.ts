import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {

  // Si no recuerdo mal, para los modelos del form, es necesario iniciarlas.
  name = '';
  body = 'Escribe aquí el cuerpo del artículo';
  post: Post = null;


  constructor(    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.postService.detail(id).subscribe(
      data => {
        this.post = data;

        // this.cargando = false;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000, 
        });
        this.router.navigate(['/']);
      }
    );

  }

  onUpdate(): void{

    const id = this.activatedRoute.snapshot.params.id;
    
 //   const nuevopost = new Post(this.name, this.body);
    this.postService.update(id, this.post).subscribe(
      data => {
        this.toastr.success('Artículo editado', '', {
          timeOut: 2000, 
       
        });
        this.router.navigate(['/articulos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000, 
        });

      }
    );
  }



}
