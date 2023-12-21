import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ArraysComponent } from './arrays/arrays.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { PipesComponent } from './pipes-usage/pipes-usage.component';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { ProductComponent } from './product/product.component';
import { ProductService } from './Services/product.service';
import { ThirdFormComponent } from './third-form/third-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Part1Component } from './pages/part1/part1.component';
import { Part2Component } from './pages/part2/part2.component';
import { Part3Component } from './pages/part3/part3.component';
import { Part4Component } from './pages/part4/part4.component';
import { Part5Component } from './pages/part5/part5.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FournotfourComponent } from './pages/fournotfour/fournotfour.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostFormComponent,
    ArraysComponent,
    SecondFormComponent,
    PipesComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    ProductComponent,
    ThirdFormComponent,
    ReactiveFormComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component,
    SingleProductComponent,
    FournotfourComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
