import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProducteditComponent } from './pages/product/productedit/productedit.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductComponent },
  { path: 'productos/edit/:id', component: ProducteditComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contacto', component: ContactoComponent }


];
