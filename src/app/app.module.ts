import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { LogUserComponent } from './log-user/log-user.component';

// importing our required modules

import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegUserComponent,
    LogUserComponent,
    HomeComponent,
    ProductsComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule ,RouterModule.forRoot([
      {path:'', redirectTo:'home', pathMatch:"full"},
      {path:'home', component:HomeComponent},
      {path:'reg-user', component:RegUserComponent},
      {path:'log-user', component:LogUserComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
