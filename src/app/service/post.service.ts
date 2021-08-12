import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient) { }

    postURL =  'http://127.0.0.1/api/posts';

    public lista(): Observable<Post[]>{

      return this.httpClient.get<Post[]>(this.postURL);

    }

    
    public save(post: Post): Observable<any>{

      return this.httpClient.post<any>(this.postURL, post);

    }

    public detail(id: number): Observable<Post>{
      return this.httpClient.get<Post>(this.postURL + `/${id}`);
    }

    public update(id: number, post: Post): Observable<any>{
      return this.httpClient.put<any>(this.postURL + `/${id}`, post);
    }

    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.postURL + `/${id}`);
    }
}
