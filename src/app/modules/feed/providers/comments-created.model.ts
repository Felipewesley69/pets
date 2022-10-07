import { User } from '@shared/models/user.model';

export interface CommentsCreated {
  id?: string;
  message?: string;
  post?: string;
  owner?: User | string;
  publishDate?: string;
}
