import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {flatMap, map} from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {IDeclaration} from '../models/IDeclaration';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  private readonly getQuery = gql(`query {
        declarationsForEmployee {
          id,
          category {
            name
          },
          status,
          description,
          date,
          amount,
          currency
        }
      }`);

  private readonly getByIdQuery = gql(`query($id: String!) {
        declaration(id: $id) {
          id,
          category {
            name
          },
          user {
            bankAccount
          }
          status,
          statusUpdates {
            date,
            comment,
            status,
            user {
              name
            }
          },
          description,
          date,
          amount,
          chargeCustomer,
          inForeignCountry,
          currency
        }
      }`);

  constructor(
    private readonly apollo: Apollo,
    private authService: AuthenticationService
  ) {
  }

  public getEmployeeDeclarations() {
    return this.apollo.watchQuery({
      query: this.getQuery,
    }).valueChanges.pipe(map(({data}) => (data as any).declarationsForEmployee as IDeclaration[]));
  }

  public getDeclaration(id: string) {
    return this.apollo.watchQuery({
      query: this.getByIdQuery,
      variables: {id},
    }).valueChanges.pipe(map(({data}) => (data as any).declaration as IDeclaration));
  }
}
