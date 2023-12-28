import {  NgModule,InjectionToken } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { Service } from './Services/SubScribeServices.service';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
//import { LoggerService } from './Services/LoggerService';

export const USER_TOKEN=new InjectionToken<UserService>('USER_SERVICE');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),Service,
    {provide: USER_TOKEN, useClass : UserService},//Using unique tokens for depedency injection by specifying provide property with token name.
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
