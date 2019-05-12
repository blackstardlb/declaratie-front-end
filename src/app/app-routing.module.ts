import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {OverviewListViewComponent} from './components/overview-list-view/overview-list-view.component';
import {NotAuthenticatedGuard} from '../guards/not_authenticated/not-authenticated.guard';
import {HomeComponent} from './components/home/home.component';
import {AuthenticatedGuard} from '../guards/authenticated/authenticated.guard';
import {IndiaGuyGuard} from '../guards/india_guy/india-guy.guard';
import {NoPermissionsComponent} from './components/no-permissions/no-permissions.component';
import {EmployeeGuard} from '../guards/employee/employee.guard';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {CreateComponent} from './components/create/create.component';
import {UploadFileComponent} from './components/upload-file/upload-file.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginScreenComponent},
  {path: 'create', component: CreateComponent, canActivate: [AuthenticatedGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthenticatedGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard]},
  {path: 'no-permissions', component: NoPermissionsComponent, canActivate: [AuthenticatedGuard]},
  {path: 'india-guy-only', component: HomeComponent, canActivate: [IndiaGuyGuard]},
  {path: 'login', component: LoginScreenComponent, canActivate: [NotAuthenticatedGuard]},
  { path: 'overview', component: OverviewListViewComponent, canActivate: [AuthenticatedGuard, EmployeeGuard]},
  { path: 'view/:id', component: DetailViewComponent, canActivate: [AuthenticatedGuard, EmployeeGuard]},
  { path: 'uploadfile', component: UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
