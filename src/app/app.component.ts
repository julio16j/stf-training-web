import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { Category } from './core/entity/Category';
import { CategoryService } from './containers/category/category.service';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this.getCategoryList();
  }

  constructor( private categoryService:CategoryService){

  }

  appTitle:String = 'Money App';
  
  @Output('categoryList')
  categoryList: Array<Category> = new Array();

  private getCategoryList(){
    this.categoryService.getCategoryList().subscribe(
      result => {
        console.log(result);
        this.categoryList = result;
      }
    );
  }

  clickMe(e){
    this.appTitle = e.value;
  }
}


