import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  constructor(public formsBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formControlGroup = new FormGroup({
    //   nomeControl: new FormControl()
    // });

    this.categoryForm = this.formsBuilder.group({
      nomeControl: [''],
      Control:['']
    })
  }

  onSubmit(){
    console.log(this.categoryForm.value)
  }

}
