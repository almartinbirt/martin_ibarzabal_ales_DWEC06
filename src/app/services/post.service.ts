import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) {}

  create(datos: any): Observable<any> {
    //return this._http.post('http://localhost:8000/producto/crear', datos);
    return this._http.post('https://fakestoreapi.com/products', datos);
  }

  read(): Observable<any>  {
    //return this._http.get('http://localhost:8000/producto/all');
    return this._http.get('https://fakestoreapi.com/products');
  }

  readOne(id:number): Observable<any>  {
    //return this._http.get('http://localhost:8000/producto/'+id);
    return this._http.get('https://fakestoreapi.com/products/'+id);
  }

  update(id: number, datos: any): Observable<any> {
    console.log("datos",datos);
    //return this._http.put('http://localhost:8000/producto/'+id+'/actualizar', datos);
    return this._http.put('https://fakestoreapi.com/products/'+id, datos);

  }

  delete(id: number): Observable<any> {
    //return this._http.delete('http://localhost:8000/producto/'+id+'/borrar');
    return this._http.delete('https://fakestoreapi.com/products/'+id);
  }




}
