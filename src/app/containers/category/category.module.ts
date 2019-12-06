import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { basematerialModule } from 'src/app/core/config/base-material.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CategoryListComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    basematerialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CategoryListComponent,
    CategoryDetailComponent
  ]
})
export class CategoryModule { }
