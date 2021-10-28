import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PostService } from './../service/post.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { post } from 'jquery';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import * as customEditor from './../build2/ckeditor';



@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  public Editor = customEditor;

  name = '';
  header = '';
  body = 'Escribe aquí el cuerpo del artículo';

  public archivos: any = [];

  public previsualizacion: string;

  portada: File = null;

  public config = {

  };



  constructor(private postService: PostService, private toastr: ToastrService,
    private router: Router, private sanitizer: DomSanitizer,
    private titleService: Title) {

    console.log(this.name);

  }

  ngOnInit() {
    this.titleService.setTitle('Nuevo artículo | MYKELT');
  }


  captura(event): any {



    const archivoCapturado = <File>event.target.files[0];

    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
      console.log(imagen);
    });


    this.portada = archivoCapturado;


  }

  crea(): void {

    const fd = new FormData();
    fd.append('name', this.name);
    fd.append('header', this.header);
    fd.append('body', this.body);
    fd.append('image', this.portada);

    this.postService.save(fd).subscribe(
      data => {
        this.toastr.success('Artículo creado', '', {
          timeOut: 3000
        });
        this.router.navigate(['/admin']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );
    console.log('aquí estaría con el post mandado')
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
