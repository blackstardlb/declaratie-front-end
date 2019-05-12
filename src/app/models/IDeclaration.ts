import {StatusEnum} from './StatusEnum';
import {Category} from './category';
import {User} from '../../models/user/user.model';


export interface IDeclaration {
  id: string;
  description: string;
  date: number;
  amount: number;
  inForeignCountry: boolean;
  chargeCustomer: boolean;
  currency: string;
  status: StatusEnum;
  statusUpdates: StatusEnum[];
  category: Category;
  files: any;
  user: User;
}
