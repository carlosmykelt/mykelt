import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post = null;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('Artículo | MYKELT');

    const id = this.activatedRoute.snapshot.params.id;
    console.log('el id es: ' + id)
    this.postService.detail(id).subscribe(
      data => {
        this.post = data;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
        this.volver();
      });
  }


  volver(): void {
    this.router.navigate(['/blog']);
  }

}
