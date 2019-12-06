import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/core/entity/Category';


@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  @Output()
  public categorySave:EventEmitter<boolean>;

  @ViewChild('categoryFormModel', {static:false})
  public categoryFormModel: NgForm;

  constructor(public formsBuilder: FormBuilder, private categoryService: CategoryService) {
    this.categorySave = new EventEmitter();
   }

  ngOnInit() {
    
    this.categoryForm = this.formsBuilder.group({
      nome: ['', [Validators.minLength(3) , Validators.required ]]
    })
  }

  onSubmit(){
    if (!this.categoryForm.valid)
      return;
    this.categoryService.postCategory(this.categoryForm.value).subscribe(
      result => {
        this.categorySave.emit(true);
      },
      error =>{
        console.log(error);

      }
    );
    this.categoryForm.reset();
    this.categoryFormModel.resetForm();
  }

}
