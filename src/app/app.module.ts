import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdGetComponent } from './prod-get/prod-get.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdAddComponent,
    ProdGetComponent,
    ProdEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
