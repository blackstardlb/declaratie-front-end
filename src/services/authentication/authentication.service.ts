import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../../models/user/user.model';
import {from, Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {Role} from '../../models/role/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: Observable<User>;
  public currentUser: User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(map(mappedUser => {
          mappedUser.id = user.uid;
          mappedUser.emailAddress = user.email;
          mappedUser.role = Role[mappedUser.role.toString()];
          return (this.currentUser = mappedUser);
        }));
      } else {
        this.currentUser = null;
        return of(null);
      }
    }));
  }

  public signIn(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  public getToken() {
    if (!this.afAuth.auth.currentUser) {
      return Promise.resolve(null);
    }
    return this.afAuth.auth.currentUser.getIdToken();
  }

  public signOut() {
    return from(this.afAuth.auth.signOut());
  }

  public isUserAuthenticated(): Observable<boolean> {
    return this.user.pipe(map(user => user != null));
  }

  public doesUserHaveRole(role: Role): Observable<boolean> {
    return this.user.pipe(map(user => user != null && user.role === role));
  }
}
