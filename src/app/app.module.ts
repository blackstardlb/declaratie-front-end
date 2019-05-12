import {BrowserModule} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloLink, FetchResult} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {OverviewListViewComponent} from './components/overview-list-view/overview-list-view.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {CreateComponent} from './components/create/create.component';
import {HomeComponent} from './components/home/home.component';
import {NoPermissionsComponent} from './components/no-permissions/no-permissions.component';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {Observable} from 'zen-observable-ts';
import {OverviewStatusIndicatorComponent} from './components/overview-status-indicator/overview-status-indicator.component';
import {ParkingFieldsComponent} from './components/parking-fields/parking-fields.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import {NgxCurrencyModule} from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  allowZero: false,
  decimal: '.',
  precision: 2,
  prefix: '$ ',
  suffix: '',
  thousands: ',',
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CreateComponent,
    LoginScreenComponent,
    OverviewListViewComponent,
    HomeComponent,
    NoPermissionsComponent,
    OverviewStatusIndicatorComponent,
    ParkingFieldsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [
    {provide: 'API_URL', useValue: environment.apiUrl},
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    @Inject('API_URL') apiUrl: string,
    authService: AuthenticationService
  ) {
    const http = httpLink.create({uri: apiUrl + '/graphql'});

    const authMiddleware = new ApolloLink((operation, forward) => {
      return new Observable<FetchResult>(observer => {
        authService.getToken().then(value => {
          observer.next(value);
          observer.complete();
        });
      }).flatMap(value => {
        if (!value) {
          return forward(operation);
        }
        operation.setContext({
          headers: new HttpHeaders().set(
            'Authorization',
            value,
          )
        });
        return forward(operation);
      });
    });

    apollo.create({
      link: authMiddleware.concat(http),
      cache: new InMemoryCache(),
    });
  }
}
