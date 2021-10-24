import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { ResultatComponent } from './resultat/resultat.component';
import { TestsComponent } from './tests/tests.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    ResultatComponent,
    UsersComponent,
    TestsComponent,
    CreateUserComponent,
    LoginComponent,
    CreateTestComponent,
    CreateResultComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
