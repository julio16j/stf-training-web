import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  @ViewChild('categoryFormModel', {static:false})
  public categoryFormModel: NgForm;

  constructor(public formsBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.categoryForm = this.formsBuilder.group({
      nomeControl: ['', [Validators.minLength(3) , Validators.required ]]
    })
  }

  onSubmit(){
    if (!this.categoryForm.valid)
      return;
    console.log(this.categoryForm.value)
    this.categoryForm.reset();
    this.categoryFormModel.resetForm();
  }

}
