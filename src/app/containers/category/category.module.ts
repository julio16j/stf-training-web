import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { basematerialModule } from 'src/app/core/config/base-material.module';



@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    basematerialModule
  ],
  exports:[
    CategoryListComponent
  ]
})
export class CategoryModule { }
