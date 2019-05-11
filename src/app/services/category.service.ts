import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {Category} from '../models/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly getQuery = gql(`query {
        categories {
          id,
          name
        }
      }`);

  constructor(
    private readonly apollo: Apollo
  ) {
  }

  public getCategories(): Observable<Category[]> {
    return this.apollo.watchQuery({
      query: this.getQuery
    }).valueChanges.pipe(map(({data}) => (data as any).categories as Category[]));
  }

  // Example on how to update
  /*public update() {
    this.apollo.mutate({
      mutation: gql(`mutation {
        addCategory {
          id,
          name
        }
      }`),
      update: (proxy, mutationResult) => {
        const data = proxy.readQuery({query: this.getQuery});
        const category: Category = {id: 35 + this.count, name: 'asd', __typename: 'Category'} as Category;
        (data as any).categories.push(category);
        proxy.writeQuery({query: this.getQuery, data});
      }
    }).toPromise().then(value => console.log(value));
  }*/

}
