import { TestsComponent } from './tests/tests.component';
import { ResultatComponent } from './resultat/resultat.component';
import { DocteurComponent } from './docteur/docteur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'test', component: TestsComponent },
  { path: 'resultat/:id', component: ResultatComponent },
  { path: 'name/:id', component: DocteurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
