import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { TempletComponent } from './templet/templet.component';
import { RactivformComponent } from './ractivform/ractivform.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:['authGuard']},
  // {path:'aboutnew',component:AboutComponent,outlet:'outlet2'},
  {path:'login',component:LoginComponent},
  {path:'ragister',component:TempletComponent},
  {path:'rea',component:RactivformComponent}
];
