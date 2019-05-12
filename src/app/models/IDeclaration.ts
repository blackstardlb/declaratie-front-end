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
  bankAccount: string;
}

export interface DeclarationArgs {

  categoryId: number;
  date: Date;
  amount: number;
  foreignCountry: boolean;
  chargeCustomer: boolean;
  currency: string;
  description: string;
  parkingInfo?: ParkingInfo;
  hotelInfo?: HotelInfo;
  bankAccount: string;

}

export interface ParkingInfo {

  month: number;
  year: number;
  rows: ParkingInfoRow[];

}

export interface ParkingInfoRow {
  date: Date;
  description: string;
  amount: number;
}

export interface HotelInfo {

  id: string;

}
