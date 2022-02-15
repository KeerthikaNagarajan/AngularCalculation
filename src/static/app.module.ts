import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuboidComponent } from './cuboid/cuboid.component';
import { ParallelogramComponent } from './parallelogram/parallel.component';


@NgModule({
  declarations: [
    AppComponent,ParallelogramComponent,CuboidComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }