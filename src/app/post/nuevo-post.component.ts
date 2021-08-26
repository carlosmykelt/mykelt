import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PostService } from './../service/post.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { post } from 'jquery';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//import { CKEditorComponent, CKEditorModule } from 'ckeditor4-angular';

import { DomSanitizer } from '@angular/platform-browser';

import * as customEditor from './../build2/ckeditor';

// import * as customEditor from './../ckCustomBuild/build/ckeditor';



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
  //   alignment: {
  //     options: [ 'left', 'center', 'right' ]
  // },
  //   toolbar: [ 'heading', '|', 'bold', 'italic', 'underline', 'Highlight', 'Link', 'Alignment',
  // 'fontColor', 'Table', 'List', 'BlockQuote', 'Image', 'HtmlComment', 'ImageUpload', 'ImageToolbar', 'ImageStyle', 
  // 'ImageCaption', 'custombutton' ],

    // // This value must be kept in sync with the language defined in webpack.config.js.
    // language: 'en'
};



  constructor(private postService: PostService, private toastr: ToastrService,
    private router: Router, private sanitizer: DomSanitizer) {

      console.log(this.name);
      
     }

  ngOnInit() {

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

  crea(): void{

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
        this.router.navigate(['/articulos']);
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
