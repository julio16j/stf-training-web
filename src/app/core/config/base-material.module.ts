import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ]
})

export class basematerialModule{}