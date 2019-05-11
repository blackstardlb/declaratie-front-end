import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {OverviewListViewComponent} from './components/overview-list-view/overview-list-view.component';
import {NotAuthenticatedGuard} from '../guards/not_authenticated/not-authenticated.guard';
import {HomeComponent} from './components/home/home.component';
import {AuthenticatedGuard} from '../guards/authenticated/authenticated.guard';
import {IndiaGuyGuard} from '../guards/india_guy/india-guy.guard';
import {NoPermissionsComponent} from './components/no-permissions/no-permissions.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthenticatedGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard]},
  {path: 'no-permissions', component: NoPermissionsComponent, canActivate: [AuthenticatedGuard]},
  {path: 'india-guy-only', component: HomeComponent, canActivate: [IndiaGuyGuard]},
  {path: 'login', component: LoginScreenComponent, canActivate: [NotAuthenticatedGuard]},
  { path: 'overview', component: OverviewListViewComponent}
];

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
