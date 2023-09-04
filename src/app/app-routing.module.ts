import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { logoutActivateGuard } from "./auth/guards/logout-activate/logout-activate.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [logoutActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
