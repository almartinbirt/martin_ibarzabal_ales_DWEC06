import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  public id: string = "";
  public title: string = "";
  public body: string = "";
  public userId: string = "";

  constructor(private _postServicio: PostService) {
    console.log("OK");

  }

  ngOnInit(): void {

    this._postServicio.read().subscribe(
      result => {

        console.log(result);
        this.id = result.id;
        this.title = result.title;
        this.body = result.body;
        this.userId = result.userId;

      },
      error => {
        console.error(error);
      }
    );

  }


}
