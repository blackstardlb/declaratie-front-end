import {BrowserModule} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloLink} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
