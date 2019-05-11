import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {OverviewListViewComponent} from './components/overview-list-view/overview-list-view.component';

// TODO Guards
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'overview', component: OverviewListViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
