import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

    postURL =  'http://127.0.0.1/api/posts';

    params: HttpParams = new HttpParams().set("_method","PUT"); //Create new HttpParams


    public lista(): Observable<Post[]>{

      return this.httpClient.get<Post[]>(this.postURL);

    }

    public image(id: number): Observable<any>{

      return this.httpClient.get<any>(this.postURL + `/${id}/image`);
    }
    
    // public save(post: Post): Observable<any>{

    //   return this.httpClient.post<any>(this.postURL, post);

    // }

    public save(post: FormData): Observable<any>{

      return this.httpClient.post<any>(this.postURL, post);
    }

    // public save(post: Post, image: string): Observable<any>{

    //   return this.httpClient.post<any>(this.postURL, post);

    // }
    public detail(id: number): Observable<Post>{
      return this.httpClient.get<Post>(this.postURL + `/${id}`);
    }

    // public update(id: number, post: Post): Observable<any>{
    //   return this.httpClient.put<any>(this.postURL + `/${id}`, post);
    // }

    public update(post: FormData): Observable<any>{
      return this.httpClient.post<any>(this.postURL + `/` + post.get(`id`)+ '?_method=PUT', post);  
    }

    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.postURL + `/${id}`);
    }
}