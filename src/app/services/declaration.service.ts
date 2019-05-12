import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {DeclarationArgs, IDeclaration} from '../models/IDeclaration';
import {StatusEnum} from '../models/StatusEnum';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  private readonly getQuery = gql(`query {
        declarationsForEmployee {
          id,
          category {
            id,
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
            id,
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
          parkingInfo {
            rows {
              date,
              amount,
              description
            }
          },
          attachments,
          description,
          date,
          amount,
          chargeCustomer,
          inForeignCountry,
          currency
        }
      }`);

  private readonly createMutation = gql(`mutation($args: DeclarationArgs!) {
                                                  createDeclaration(args: $args)
                                               }`);

  private readonly getAllQuery = gql(`query {
    allDeclarations {
       id,
          category {
            id,
            name
          },
          status,
          description,
          date,
          amount,
          currency
    }
  }`);

  private readonly updateStatusMutation = gql(`mutation($id: String!, $status: Float!, $comment: String) {
    updateStatus(id: $id, status: $status, comment: $comment)
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

  public getAllDeclarations() {
    return this.apollo.watchQuery({
      query: this.getAllQuery
    }).valueChanges.pipe(map(({data}) => (data as any).allDeclarations as IDeclaration[]));
  }

  public getDeclaration(id: string) {
    return this.apollo.watchQuery({
      query: this.getByIdQuery,
      variables: {id},
    }).valueChanges.pipe(map(({data}) => (data as any).declaration as IDeclaration));
  }

  public createDeclaration(args: DeclarationArgs) {
    return this.apollo.mutate({
      mutation: this.createMutation,
      variables: {
        args
      }
    }).pipe(map(({data}) => (data as any).createDeclaration as string));
  }

  public updateStatus(id: string, status: number, comment?: string) {
    return this.apollo.mutate({
      mutation: this.updateStatusMutation,
      variables: {
        id,
        status,
        comment
      },
      /*update: (proxy, result) => {
        const data = proxy.readQuery({query: this.getAllQuery});
        (data as IDeclaration[]).forEach(value => {
          if (value.id === id) {
            value.status = `${status}` as StatusEnum;
          }
        });
        proxy.writeQuery({query: this.getAllQuery, data});
      }*/
    }).pipe(map(({data}) => (data as any).updateStatus as string));
  }
}
