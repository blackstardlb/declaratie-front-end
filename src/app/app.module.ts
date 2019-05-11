import {BrowserModule} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloLink} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CreateComponent
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
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    @Inject('API_URL') apiUrl: string,
  ) {
    const http = httpLink.create({uri: apiUrl + '/graphql'});

    const authMiddleware = new ApolloLink((operation, forward) => {
      // TODO If user is not logged in forward operation

      /*  if (!user) {
          return forward(operation);
        }*/

      // TODO Get id token and set the authorization token
      /*operation.setContext({
        headers: new HttpHeaders().set(
          'Authorization',
          token,
        ).set('pharmacyId', '')
      });*/
      return forward(operation);
    });

    apollo.create({
      link: authMiddleware.concat(http),
      cache: new InMemoryCache(),
    });
  }

}
