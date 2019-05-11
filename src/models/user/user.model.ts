import {Role} from '../role/role.enum';

export class User {
  name: string;
  emailAddress: string;
  bankAccount: string;
  role: Role;


  constructor(name: string, emailAddress: string, bankAccount: string, role: Role) {
    this.name = name;
    this.emailAddress = emailAddress;
    this.bankAccount = bankAccount;
    this.role = role;
  }
}
