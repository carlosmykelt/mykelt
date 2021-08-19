import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

import { DomSanitizer } from '@angular/platform-browser';

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

  public previsualizacion: string;
  portada: File = null;


  constructor(    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService, private router: Router, private sanitizer: DomSanitizer) { }

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

    const fd = new FormData();
    fd.append('id', id);
    fd.append('name', this.post.name);
    fd.append('body', this.post.body);
    fd.append('image', this.portada);
  //  fd.append('_method', 'PUT');

    // console.log(fd.get('id'));

    this.postService.update(fd).subscribe(
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


   captura(event): any{

           // console.log(event.target.files); // la img se encuentra dentro de target.files

           const archivoCapturado = <File>event.target.files[0];
           
           this.extraerBase64(archivoCapturado).then((imagen: any) => {
               this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
               console.log(imagen);
             });
           
    

             this.portada = archivoCapturado;
      //     this.archivos.push(archivoCapturado); // En el array creado, incluímos la imagen

  }

     
  // // El evento que le pasamos, crea una función tipo file, la lee y nos devuelve el base64
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  });


}
