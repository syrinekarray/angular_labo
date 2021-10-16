import { TestsComponent } from './tests/tests.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { LaboDetailComponent } from './labo-detail/labo-detail.component';
import { ResultatComponent } from './resultat/resultat.component';
import { DocteurComponent } from './docteur/docteur.component';
import { TechnicienComponent } from './technicien/technicien.component';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    LaboDetailComponent,
    MessageComponent,
    TechnicienComponent,
    ResultatComponent,
    DocteurComponent,
    UsersComponent,
    TestsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
