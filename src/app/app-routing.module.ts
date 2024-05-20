import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list.component';
import { CarFormComponent } from './car-form.component';

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'add-car', component: CarFormComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
