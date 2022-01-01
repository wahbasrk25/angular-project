import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RegisterComponent } from './components/register/register.component';
import { EvecoalmaskComponent } from './components/evecoalmask/evecoalmask.component';
import { EvegoldenmaskComponent } from './components/evegoldenmask/evegoldenmask.component';
import { EvesilvermaskComponent } from './components/evesilvermask/evesilvermask.component';
import { MilkcreamComponent } from './components/milkcream/milkcream.component';
import { BottomComponent } from './components/bottom/bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    AboutusComponent,
    RegisterComponent,
    EvecoalmaskComponent,
    EvegoldenmaskComponent,
    EvesilvermaskComponent,
    MilkcreamComponent,
    BottomComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
