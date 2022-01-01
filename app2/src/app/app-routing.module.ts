import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { EvecoalmaskComponent } from './components/evecoalmask/evecoalmask.component';
import { EvegoldenmaskComponent } from './components/evegoldenmask/evegoldenmask.component';
import { EvesilvermaskComponent } from './components/evesilvermask/evesilvermask.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MilkcreamComponent } from './components/milkcream/milkcream.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  

  {path:"header",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"register",component:RegisterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"evecoalmask",component:EvecoalmaskComponent},
  {path:"evegoldenmask",component:EvegoldenmaskComponent},
  {path:"evesilvermask",component:EvesilvermaskComponent},
  {path:"milkcream",component:MilkcreamComponent},
  {path:"bottom",component:BottomComponent},







  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
