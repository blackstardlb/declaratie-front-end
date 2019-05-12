import {User} from '../../models/user/user.model';

export interface StatusUpdate {
  id: string;
  comment?: string;
  date: number;
  status: number;
  user: User;
  userId: string;
}
