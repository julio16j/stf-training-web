import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.getCategoryList();
    }, 2000)
    console.log('APPCOMPONENT: executando onInit')
  }

  appTitle:String = 'Money App';
  
  categoryList: Array<Category> = new Array();

  private getCategoryList(){
    this.categoryList = new Array(
      { 'id': 1, 
        'nome': 'Lazer'
       },
      { 'id': 2, 
        'nome': 'Alimentacão'
       },
      { 'id': 3, 
        'nome': 'Supermercado'
       },
      { 'id': 4, 
        'nome': 'Farmácia'
       },
      { 'id': 5, 
        'nome': 'Estudo'
       },
      { 'id': 6, 
        'nome': 'Outros'
       }
    )
  }

  clickMe(e){
    this.appTitle = e.value;
  }
}


