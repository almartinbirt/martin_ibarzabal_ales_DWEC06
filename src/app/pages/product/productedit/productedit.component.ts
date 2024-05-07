import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../modelo/Product';
import { MenuComponent } from '../../../components/menu/menu.component';

@Component({
  selector: 'app-postedit',
  standalone: true,
  imports: [FormsModule, MenuComponent],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.scss',
  providers: [PostService]
})
export class ProducteditComponent implements OnInit {

  public result: any;
  private _route: ActivatedRoute;
  public param: any = 0;

  public id: number | undefined;
  public title: string | undefined;
  public prize: number | undefined;
  public description: string | undefined;

  constructor(private _postServicio: PostService, _router: Router, _route: ActivatedRoute, private router: Router) {
    this._route = _route;
  }

  ngOnInit(): void {
    this._route.params.subscribe(

      (params: Params)=>{
        console.log(params);
        this.param = params;

        console.log("Parametros recividos de la URL", this.param.id);


      }

    );


    this._postServicio.readOne(this.param.id).subscribe(
      result => {

        console.log(result);
        this.result = result;
        this.id = result.id;
        this.title = result.title;
        this.prize = result.price;
        this.description = result.description;

      },
      error => {
        console.error(error);
      }

    );

  }




onSubmit(): void {

  if (this.title && this.description && this.prize !== undefined && this.param.id) {
      console.log("Guardando...");


      const prod: Product =  new Product(
          this.title,
          this.description,
          this.prize
      );
      //console.log(prod);


      this._postServicio.update(this.param.id, prod).subscribe(
          result => {
              console.log("Producto actualizado con éxito:", result);
              alert("Producto actualizado con éxito en el endpoint: https://fakestoreapi.com/products");
             // this.router.navigate(['/productos/']);

          },
          error => {
              console.error("Error al actualizar el producto:", error);

          }
      );
  } else {
      console.error("Datos de entrada inválidos");

  }
}



}
