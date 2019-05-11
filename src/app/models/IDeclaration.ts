import {StatusEnum} from './StatusEnum';


export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  currency: string;
  status: StatusEnum;
  category: any;
  files: any;
  empId: number;
}
