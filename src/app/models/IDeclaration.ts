import {StatusEnum} from './StatusEnum';
import {Category} from './category';
import {User} from '../../models/user/user.model';


export interface IDeclaration {
  id: string;
  description: string;
  date: number;
  amount: number;
  currency: string;
  status: StatusEnum;
  category: Category;
  files: any;
  empId: number;
  user: User;
}
