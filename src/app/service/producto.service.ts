import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://127.0.0.1/api/products';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<any>(this.productoURL);
  }

  public price(priceId: string): Observable<any> {
    return this.httpClient.get<any>(this.productoURL + `/price/${priceId}`);
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `/${id}`);
  }

  public card(): Observable<any> {
    return this.httpClient.get<any>(this.productoURL + `/card`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL, producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `/${id}`);
  }

}
