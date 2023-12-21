import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './pages/part1/part1.component';
import { Part2Component } from './pages/part2/part2.component';
import { Part3Component } from './pages/part3/part3.component';
import { Part4Component } from './pages/part4/part4.component';
import { Part5Component } from './pages/part5/part5.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductComponent } from './product/product.component';
import { FournotfourComponent } from './pages/fournotfour/fournotfour.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'reactive-form', component:ReactiveFormComponent},
    { path:'part-one', component:Part1Component},
    { path:'part-two', component:Part2Component},
    { path:'part-three', component:Part3Component},
    { path:'part-four', component:Part4Component},
    { path:'part-five', component:Part5Component},
    { path:'products', component:ProductComponent},
    { path:'single-product/:id/:title', component:SingleProductComponent},
    { path:'**', component:FournotfourComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
