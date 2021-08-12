import { PostService } from './../service/post.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { post } from 'jquery';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { CKEditorComponent } from 'ckeditor4-angular';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  name = '';
  body = 'Escribe aquí el cuerpo del artículo';

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
    private router: Router) {

      console.log(this.name);
      
     }

  ngOnInit() {

    
  }

  onCreate(): void{


    const post = new Post(this.name, this.body);
    this.postService.save(post).subscribe(
      data => {
        this.toastr.success('Producto creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/articulos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });

      }
    );
  }

  imprime(): void{
    console.log(this.body);
  }
  // ckeditor(){

  //     ClassicEditor
  // .create( document.querySelector( '#ckeditor' ) )
  // .catch( error => {
  //     console.error( error );
  // } );
  // }


}
