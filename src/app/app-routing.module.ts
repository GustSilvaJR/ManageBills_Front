import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { CanActivateGuard } from './core/auth/guards/can-activate.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:"", component:LoginComponent, canActivate:[CanActivateGuard]},
  {
    path: "pages",
    component:MainComponent,
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
