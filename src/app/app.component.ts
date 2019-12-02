import { Component } from '@angular/core';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  appTitle:String = 'Money App';
  

  clickMe(e){
    this.appTitle = e.value;
  }
}
