import { PostService } from './../service/post.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { post } from 'jquery';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { CKEditorComponent } from 'ckeditor4-angular';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  name = '';
  body = 'Escribe aquí el cuerpo del artículo';

  public archivos: any = [];

  public previsualizacion: string;

  portada: File = null;

    // config.uiColor = '#F7B42C';
 
  
  // editorData: '<p>Hello, world!</p>';




  // ckeditorContent: string = 'probando';
  @ViewChild(CKEditorComponent) ckEditor: CKEditorComponent;

  ngAfterViewChecked(){
    let editor = this.ckEditor.instance;
    editor.config.height = '200';
    editor.config.toolbarGroups = [
      { name: 'document', groups: ['mode', 'document', 'doctools']}
    ]
  }

  constructor(private postService: PostService, private toastr: ToastrService,
    private router: Router, private sanitizer: DomSanitizer) {

      console.log(this.name);
      
     }

  ngOnInit() {

    
  }

  // onCreate(): void{

  //   this.subirArchivo();

  //   // const post = new Post(this.name, this.body, formularioDeDatos);
  //   // this.postService.save(post).subscribe(
  //   //   data => {
  //   //     this.toastr.success('Artículo creado', '', {
  //   //       timeOut: 3000
  //   //     });
  //   //     this.router.navigate(['/articulos']);
  //   //   },
  //   //   err => {
  //   //     this.toastr.error(err.error.mensaje, 'Error', {
  //   //       timeOut: 3000
  //   //     });

  //   //   }
  //   // );
  // }

  // subirArchivo(): any {
  //   try {
  //   //  this.loading = true;
  //     const formularioDeDatos = new FormData(); // Es un archivo que tiene datos binarios, necesitamos un formdata
  //     this.archivos.forEach(archivo => {
  //       formularioDeDatos.append('files', archivo)    // Nombre que la api o servicio nos pida
  //       // ---------------------------------------CREO QUE DEBO INCLUIR archivo EN LA LLAMADA AL SERVICIO
  //      console.log('función subir')
  //       console.log(archivo);
  //     })

  //     const post = new Post(this.name, this.body, formularioDeDatos);
  //     this.postService.save(post).subscribe(
  //       data => {
  //         this.toastr.success('Artículo creado', '', {
  //           timeOut: 3000
  //         });
  //         this.router.navigate(['/articulos']);
  //       },
  //       err => {
  //         this.toastr.error(err.error.mensaje, 'Error', {
  //           timeOut: 3000
  //         });
  
  //       }
  //     );


  //     //  formularioDeDatos.append('_id', 'MY_ID_123')
  //   //   this.postService.save(post)
  //   //     .subscribe(res => {
  //   //  //     this.loading = false;
  //   //       console.log('Respuesta del servidor', res);

  //   //     }, () => {
  //   //  //     this.loading = false;
  //   //       alert('Error');
  //   //     })
  //   } catch (e) {
  //  //   this.loading = false;
  //     console.log('ERROR', e);

  //   }
  // }


  // ckeditor(){

  //     ClassicEditor
  // .create( document.querySelector( '#ckeditor' ) )
  // .catch( error => {
  //     console.error( error );
  // } );
  // }

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
    fd.append('body', this.body);
    fd.append('image', this.portada);

    console.log('llega a funcion crea')
    console.log(this.portada)
 //   const post = new Post(this.name, this.body, fd);

    console.log('aquí estaría creado')
    console.log(post)
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

  // capturarFile(event): any{

  //       // console.log(event.target.files); // la img se encuentra dentro de target.files

  //   const archivoCapturado = event.target.files[0];
  //   this.extraerBase64(archivoCapturado).then((imagen: any) => {
  //       this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
  //       console.log(imagen);
  //     });
    

  //   this.archivos.push(archivoCapturado); // En el array creado, incluímos la imagen

  // }

   
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
  })


}
