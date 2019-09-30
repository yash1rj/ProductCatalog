import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdGetComponent } from './prod-get/prod-get.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';


const routes: Routes = [
  { 
    path: 'products', 
    component: ProdGetComponent 
  },
  { 
    path: 'product/create', 
    component: ProdAddComponent 
  },
  {
    path: 'edit/:id',
    component: ProdEditComponent
  },
  { 
    path: '**', 
    redirectTo: 'products', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
