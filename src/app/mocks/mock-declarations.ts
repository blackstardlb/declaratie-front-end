import {StatusEnum} from '../models/StatusEnum';
import {IDeclaration} from '../models/IDeclaration';


export const DECLARATIONS: IDeclaration[] = [
  { id: 0, description: 'Gasoline', currency: "$", amount: 120, date: new Date().toISOString(),
    empId: 1, status: StatusEnum.SUBMITTED, category: 'hotel', files: []},

  { id: 1, description: 'Food for good', currency: "€", amount: 10, date: '1-1-2019', empId: 1,
    status: StatusEnum.INPROGRESS, category: 'parking', files: []}
];
