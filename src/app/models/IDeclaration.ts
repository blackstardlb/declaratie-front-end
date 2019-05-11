import {StatusEnum} from './StatusEnum';


export interface IDeclaration {
  id: number;
  description: string;
  date: string;
  amount: number;
  status: StatusEnum;
  category: any;
  files: any;
  empId: number;
}
