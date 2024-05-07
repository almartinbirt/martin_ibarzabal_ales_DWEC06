import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MenuComponent } from '../../components/menu/menu.component';
import { Router } from '@angular/router';
import { Product } from '../../modelo/Product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MenuComponent, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [PostService]
})
export class ProductComponent implements OnInit {

  public result: any;
  private _router: any;

  public nuevotitle: string = "";
  public nuevoprize: number = 0 ;
  public nuevadescription: string = "";

  public delet: number | undefined;
  public edi: number | undefined;


  constructor(private _postServicio: PostService, _router: Router) {
    console.log("OK");
    this._router = _router

  }

  ngOnInit(): void {

    this._postServicio.read().subscribe(
      result => {

        this.result = result;

      },
      error => {
        console.error(error);
      }
    );

  }

  onSubmit(): void {

  console.log("CREAR: ");

  const prod: Product =  new Product(
    this.nuevotitle,
    this.nuevadescription,
    this.nuevoprize
  );


  this._postServicio.create(prod).subscribe({
    next: data => {
      console.log("Nuevo post creado:", data);
      alert("Producto creado con éxito.");

      this._postServicio.read().subscribe(data => {
        this.result = data;
      },
      error => {
        console.error("Error al recargar datos:", error);
      });
    },
    error: error => {
      console.log("Error al crear el nuevo post:", error);
    }
  });
}

  update(id:number): void {
    console.log("UPDATE: "+id);

    this._router.navigate(["productos/edit/"+id]);
  }

  delete(id:number): void {
    this._postServicio.delete(id).subscribe({
      next: data =>{
        console.log("DELETE", data);
        console.log(data.id);
        this.delet = data.id;
        this._postServicio.read().subscribe(result => {
          this.result = result;
        },
        error => {
          console.error("Error al recargar datos:", error);
        });
      },
      error: error =>{
        console.log(error);
      }});
  }

}
