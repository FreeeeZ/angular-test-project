import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { XyzComponent } from '@/xyz/xyz.component';
// @ts-ignore
import { AbcComponent } from '@/abc/abc.component';
// @ts-ignore
import { NotFoundComponent } from '@/not-found/not-found.component';

const routes: Routes = [
  { path: 'one', component: XyzComponent },
  { path: 'two', component: AbcComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
