import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from'@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { RegisterComponent } from './register/register.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { BookspaceComponent } from './bookspace/bookspace.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes:Routes=[
  {path:'',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'addvehicle',component: AddvehicleComponent},
  {path:'viewvehicle',component:ViewvehicleComponent},
  {path:'bookspace',component:BookspaceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AddvehicleComponent,
    RegisterComponent,
    ViewvehicleComponent,
    BookspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
