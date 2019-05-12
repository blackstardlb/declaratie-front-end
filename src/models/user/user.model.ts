import {Role} from '../role/role.enum';

export class User {
  id: string;
  name: string;
  emailAddress: string;
  bankAccount: string;
  role: Role;


  constructor(id: string, name: string, emailAddress: string, bankAccount: string, role: Role) {
    this.id = id;
    this.name = name;
    this.emailAddress = emailAddress;
    this.bankAccount = bankAccount;
    this.role = role;
  }
}
