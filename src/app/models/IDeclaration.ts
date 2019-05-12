import {StatusEnum} from './StatusEnum';
import {Category} from './category';
import {User} from '../../models/user/user.model';
import {StatusUpdate} from './status.update';


export interface IDeclaration {
  id: string;
  description: string;
  date: number;
  amount: number;
  inForeignCountry: boolean;
  chargeCustomer: boolean;
  currency: string;
  status: StatusEnum;
  statusUpdates: StatusUpdate[];
  category: Category;
  user: User;
  bankAccount: string;
  parkingInfo?: ParkingInfo;
  hotelInfo?: HotelInfo;
  attachments: string[];
}

export interface DeclarationArgs {

  categoryId: number;
  date: Date;
  amount: number;
  inForeignCountry: boolean;
  chargeCustomer: boolean;
  currency: string;
  description: string;
  parkingInfo?: ParkingInfo;
  hotelInfo?: HotelInfo;
  bankAccount: string;
  attachments: string[];

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
